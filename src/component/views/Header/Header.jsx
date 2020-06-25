
import React from "react";

const Header = (props) => {
    return <header className="col-12 stepper">
        <div className="col-12 text-center">
            <div className="stepperBtn">
                <ul className="stepper">
                    <li className="step active">
                        <span className="upper-text"></span>
                        <span className={(props.step === 1) ? 'dot upperTextSelect' : ( (props.step === 2 || props.step === 3) ? 'dot myClass' : 'dot' )}>1</span>
                        <span className={props.step === 1 ? "arrow" : ""}></span>
                    </li>
                    <li className="step active">
                        <span className="upper-text"></span>
                        <span className={(props.step === 2) ? 'dot upperTextSelect' : ( (props.step === 3) ? 'dot myClass' : 'dot' )}>2</span>
                        <span className={props.step === 2 ? "arrow" : ""}></span>
                    </li>
                    <li className="step active">
                        <span className="upper-text"></span>
                        <span className={props.step === 3 ? "dot upperTextSelect" : "dot"}>3</span>
                        <span className={props.step === 3 ? "arrow" : ""}></span>
                    </li>
                </ul>
            </div>
        </div>
    </header>
}

export default Header;