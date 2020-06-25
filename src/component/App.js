import React, { Component } from "react";
import Step1 from "./views/ProductInformation";
import Step2 from "./views/Form";
import { Error, Success } from "./views/Feedback";
import "./App.scss";
import Header from "./views/Header/Header";
import Footer from "./views/Footer/Footer";
import { submitForm } from "../services/api";

class App extends Component {

    constructor() {
        super()
        this.state = {
            show: true,
            currentForm: 1,
            previousForm: 1,
            step: 1,
            formData: {
                password: "",
                reTypePassword: "",
                description: ""
            },
            inputError: [],
            error: false
        };
    }

    onChangeHandler = (event) => {
        const name = event.target.name;
        let value = event.target.value;
        this.setState({
            formData: { ...this.state.formData, [name]: value }
        }, () => {
            this.validteInput(value, name)
            console.log("formdata", this.state.formData)
        })
    }

    matchPattern = (value) => {
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
        return re.test(value);
    }

    validteInput = (value, name) => {
        if (value.length && !this.matchPattern(value)) {
            let newArr = []
            newArr.push(name)
            this.setState({
                inputError: [...this.state.inputError, ...newArr]
            })
        } else {
            let newAr = this.state.inputError.filter(item => {
                return item !== name;
            })
            this.setState({ inputError: newAr })
        }
    }

    getStepForm = (step) => {
        switch (step) {
            case 1:
                return <Step1 />
            case 2:
                return <Step2
                    error={this.state.error}
                    inputError={this.state.inputError}
                    validteInput={this.validteInput}
                    formData={this.state.formData}
                    onChangeHandler={this.onChangeHandler}
                />
            case 3:
                return <div><Error /> : <Success /></div>
        }
    }

    onClickNext = () => {
        if (this.state.step == 2) {
            this.hnadelSave()
        }
        else this.goToNext()
    }

    goToNext = () => {
        this.setState({
            step: this.state.step !== 3 ? this.state.step + 1 : this.state.step,
            currentForm: this.state.step
        })
    }

    hnadelSave = () => {
        if (this.state.formData.password && this.state.formData.password === this.state.formData.reTypePassword && !this.state.inputError.length) {
            let promise = submitForm(this.state.formData.password, this.state.formData.reTypePassword, this.state.formData.description).then(res=> res)
            
            console.log(promise.res, "promise")
            this.setState({
                error: false
            }, () => {
                this.goToNext()
            })
        } else {
            this.setState({
                error: true
            })
        }

    }

    onClickCancel = () => {
        this.setState({
            step: this.state.step !== 1 ? this.state.step - 1 : this.state.step,
            currentForm: this.state.step
        })
    }

    render() {
        return (
            <section className="parentSection">
                <section className="childSection mb-4">
                    <Header step={this.state.step} currentForm={this.state.currentForm} />
                    {this.getStepForm(this.state.step)}
                    <Footer onClickCancel={this.onClickCancel} onClickNext={this.onClickNext} />
                </section>
            </section>
        );
    }
}

export default App;

