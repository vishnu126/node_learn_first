import React, { Component } from "react";
import { FormattedMessage } from 'react-intl';
import firstImg from './first.PNG';
import secondImg from './second.PNG';

const Step1 = (props) => {
    return <section className="col-12">
        <div className="container">
            <div className="row mt-4">
                <h3> <FormattedMessage id="Form.CreatePassManager" /></h3>
            </div>
            <div className="row mt-5">
                <div className="col-6 text-center">
                    <div className="col-12">
                        <img className="img-thumbnail"
                            src={firstImg} />
                    </div>
                    <div className="col-12 mt-3">
                        <p><FormattedMessage id="Form.InfoFirst" /></p>
                    </div>
                </div>

                <div className="col-6 text-center">
                    <div className="col-12">
                        <img className="img-thumbnail" src={secondImg} />
                    </div>
                    <div className="col-12 mt-3">
                        <p><FormattedMessage id="Form.InfoSec" /></p>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-12 mx-auto">
                    <h4><FormattedMessage id="Form.HowDoesWorkTitle" /></h4>
                    <p><FormattedMessage id="Form.HowDoesWork" /></p>
                </div>
            </div>

            <div className="row my-4">
                <div className="col-12">
                    <h4 className="mx-auto"><FormattedMessage id="Form.HowCanDataTitle" /></h4>
                    <p><FormattedMessage id="Form.HowCanData" /></p>
                </div>
            </div>
        </div>
    </section>
}

export default Step1;