import React from "react";
import Step1 from "./views/ProductInformation";
import Step2 from "./views/Form";
import { Feedback } from "./views/Feedback";
import "./App.scss";
import Header from "./views/Header/Header";
import Footer from "./views/Footer/Footer";
import { submitForm } from "../services/api";
class App extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            step: 1,
            formData: {
                password: "pruebaKO123",
                reTypePassword: "pruebaKO123",
                description: ""
            },
            inputError: [],
            status: null,
            error: false,
            showPassFlag: false,
            showRePassFlag: false
        };
    }

    /**
     *Onchnage handler will update the form value
     *
     * @memberof App
     */
    onChangeHandler = (event) => {
        const name = event.target.name;
        let value = event.target.value;
        this.setState({
            formData: { ...this.state.formData, [name]: value }
        }, () => {
            this.validteInput(value, name)
        })
    }

    /**
     *Regular exp, that check, the the required validation is matched or not
     *
     * @memberof App
     */
    matchPattern = (value) => {
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
        return re.test(value);
    }

    /**
     *Validate the input field
     *
     * @memberof App
     */
    validteInput = (value, name) => {
        if (value.length && !this.matchPattern(value) && name !== "description") {
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

    /**
     *Render the page on basis of condition
     *
     * @memberof App
     */
    getStepForm = (step) => {
        switch (step) {
            case 1:
                return <Step1 />
            case 2:
                return <Step2
                    showPassFlag={this.state.showPassFlag}
                    showRePassFlag={this.state.showRePassFlag}
                    showPassword={this.showPassword}
                    error={this.state.error}
                    inputError={this.state.inputError}
                    validteInput={this.validteInput}
                    formData={this.state.formData}
                    onChangeHandler={this.onChangeHandler}
                />
            case 3:
                return this.state.status !== null ? <Feedback status={this.state.status} backToPasswordManager={this.backToPasswordManager} /> : null
        }
    }

    /**
     *For next step
     *
     * @memberof App
     */
    onClickNext = () => {
        if (this.state.step === 2) {
            this.hnadelSave()
        }
        else this.goToNext()
    }

    /**
     *For next step setState
     *
     * @memberof App
     */
    goToNext = () => {
        this.setState({
            step: this.state.step !== 3 ? this.state.step + 1 : this.state.step,
            currentForm: this.state.step
        })
    }

    /**
     * Handle save will check the data, and then show the feedback
     *
     * @memberof App
     */
    async hnadelSave() {
        if (this.state.formData.password && this.state.formData.password === this.state.formData.reTypePassword && !this.state.inputError.length) {
            let formDataStatus = await submitForm(this.state.formData.password, this.state.formData.reTypePassword, this.state.formData.description).then(function (successMessage) {
                return successMessage
            }, function (errorMessage) {
                return errorMessage;
            })
            this.setState({
                error: false,
                status: formDataStatus.status,
                formData: {
                    password: "",
                    reTypePassword: "",
                    description: ""
                }
            }, () => {
                this.goToNext()
            })
        } else {
            this.setState({
                error: true
            })
        }

    }

    /**
     *This function will cahnge back to step by step
     *
     * @memberof App
     */
    onClickCancel = () => {
        this.setState({
            step: this.state.step !== 1 ? this.state.step - 1 : this.state.step,
            formData: {
                password: "",
                reTypePassword: "",
                description: ""
            },
            inputError: [],
            error: false
        })
    }

    /**
     * This function will redirect to Step1
     *
     * @memberof App
     */
    backToPasswordManager = () => {
        this.setState({
            formData: {
                password: "",
                reTypePassword: "",
                description: ""
            },
            step: 1,
            status: null
        })
    }

    showPassword = (name) => {
        name === "password" ? this.setState({
            showPassFlag: !this.state.showPassFlag,
        }) : this.setState({
            showRePassFlag: !this.state.showRePassFlag,
        })
    }

    render() {
        return (
            <section className="parentSection">
                <section className="childSection mb-4">
                    <Header step={this.state.step} currentForm={this.state.currentForm} />
                    {this.getStepForm(this.state.step)}
                    {this.state.status == null ? <Footer onClickCancel={this.onClickCancel} onClickNext={this.onClickNext} /> : null}
                </section>
            </section>
        );
    }
}

export default App;

