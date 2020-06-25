
import React from "react";
import error from './error.png';
import success from './success.png';
import { FormattedMessage } from "react-intl";

export const Feedback = (props) => {
    return <section className="col-12 mt mb">
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <img src={props.status === 401 ? error : success} alt="Create Password" className="float-right" />
                </div>
                <div className="col-md-6">
                    <h3>{props.status === 401 ? <FormattedMessage id="Form.ErrorHasOccured" /> : <FormattedMessage id="Form.PassMangerAlreadyCreated" />}</h3>
                    <p>{props.status === 401 ? <FormattedMessage id="Form.ErrorMsg" /> : <FormattedMessage id="Form.Success" />}</p>
                </div>
            </div>
            <div className="row borderTop">
                <div className="col-12 text-right">
                    {props.status === 401 ? <button type="button" className="btn btn-link" onClick={props.backToPasswordManager}><FormattedMessage id="Form.BackPass" /></button> : <button type="button" className="btn btn-link" ><FormattedMessage id="Form.Acceder" /></button>}
                </div>
            </div>
        </div>
    </section>
}
