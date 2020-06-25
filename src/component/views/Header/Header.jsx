import React, { Component } from "react";

const Header = (props) => {
    return <header className="col-12 stepper">
        <div className="col-12 text-center">
            <div className="stepperBtn">
                <ul className="stepper">
                    <li className={"step active"}>
                        <span className={props.step === 1 ? "step active upperTextSelect" : "step active"}></span>
                        <span className={props.step === 1 ? "dot upperTextSelect" : ""}>1</span>
                        <span className= {props.step === 1 ? "arrow" : ""}></span>
                    </li>
                    <li className="step active">
                        <span className={props.step === 2 ? "step active upperTextSelect" : "step active"}></span>
                        <span className={props.step === 2 ? "dot upperTextSelect" : ""}>2</span>
                        <span className={props.step === 2 ? "arrow" : ""}></span>
                    </li>
                    <li className="step active">
                        <span className={props.step === 3 ? "step active upperTextSelect" : "step active"}></span>
                        <span className={props.step === 3 ? "dot upperTextSelect" : ""}>3</span>
                        <span className={props.step === 3 ? "arrow" : ""}></span>
                    </li>
                </ul>
            </div>
        </div>
    </header>
}

export default Header;