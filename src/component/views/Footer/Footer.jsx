import React, { Component } from "react";
import { FormattedMessage } from 'react-intl';

const Footer = (props) => {
    return <section className="col-12 mx-auto mb-4 borderTop">
        <div className="container my-4">
            <div className="row">
                <div className="col-6 text-left">
                    <button type="button" onClick={props.onClickCancel} className="btn btn-light"><FormattedMessage id="Form.Cancel" /></button>
                </div>
                <div className="col-6 text-right">
                    <button type="button" className="btn btn-dark" onClick={props.onClickNext}><FormattedMessage id="Form.Next" /></button>
                </div>
            </div>
        </div>
    </section>
}

export default Footer;