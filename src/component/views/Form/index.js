import React from "react";
import { FormattedMessage } from 'react-intl';

const Step2 = (props) => {
    return <section>
        <div className="secondSectionBody">
            <div className="row my-4">
                <div className="col-10 px-0">
                    <p className="error-text">{props.error ? "Please check the required field." : ""}</p>
                    <h3 className="p-b">
                        <FormattedMessage id="Form.CreatePassManager" />
                    </h3>
                    <p>
                        <FormattedMessage id="Form.HowDoesWork" />
                    </p>
                    <form className="col-12 px-0">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="Password">
                                    <FormattedMessage id="Form.Password" />
                                </label>
                                <input name="password" value ={props.formData.password} maxLength="24" id="password" type={props.showPassFlag ? "text" : "password"} className="form-control" onChange={props.onChangeHandler} />
                                <i onClick={props.showPassword.bind(this, "password")} className={props.showPassFlag ? "fa fa-eye errspan" : "fa fa-eye-slash errspan"} aria-hidden="true"></i>
                                <p className="error-text">{props.inputError.includes("password") ? "length should be min 8 and max 24, and should contain one Uppercae and one numeric" : ""}</p>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="password">
                                    <FormattedMessage id="Form.RetypePassword" />
                                </label>
                                <input name="reTypePassword" value ={props.formData.reTypePassword} maxLength="24" id="reTypePassword" type={props.showRePassFlag ? "text" : "password"} className="form-control"
                                    placeholder="Password" onChange={props.onChangeHandler} />
                                <span><i onClick={props.showPassword.bind(this, "reTypePassword")} className={props.showRePassFlag ? "fa fa-eye errspan" : "fa fa-eye-slash errspan"} aria-hidden="true"></i></span>
                                <p className="error-text">{props.formData.reTypePassword && props.formData.reTypePassword !== props.formData.password ? "Repeat Master Password should be same as the Create Master Pasword " : ""}</p>
                            </div>

                            <p ><FormattedMessage id="Form.InFoFour" /></p>
                            <div className="form-group col-md-12 p-b">
                                <label htmlFor="comments"><FormattedMessage id="Form.Comments" /></label>
                                <input name="description" maxLength="240" id="description" type="text" className="form-control" placeholder="Comments" onChange={props.onChangeHandler} />
                                <p className="text-right">{props.formData.description.length + "/" + 240}</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
}

export default Step2;