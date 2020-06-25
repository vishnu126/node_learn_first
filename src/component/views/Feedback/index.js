
import React, { Component } from "react";
import error from './error.png';
import success from './success.png';
import { FormattedMessage } from 'react-intl';

export const Success = (props) => {
    return <div className="row p-d">
        <div className="col-md-2 ">
            <img src={success} className="float-right" />
        </div>
        <div className="col-md-6">
            <h3><FormattedMessage id="Form.PassMangerAlreadyCreated" /></h3>
            <p><FormattedMessage id="Form.Success" /></p>
        </div>
    </div>
}

export const Error = (props) => {
    return <div className="row p-d">
        <div className="col-md-2">
            <img src={error} className="float-right" />
        </div>
        <div className="col-md-6">
            <h3><FormattedMessage id="Form.ErrorHasOccured" /></h3>
            <p><FormattedMessage id="Form.ErrorMsg" /></p>
        </div>
    </div>
}
