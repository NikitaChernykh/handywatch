import React, { Component } from 'react';
import Step from '../StepComponent';
import emailIcon from '../../Images/Icons/email.svg'
import downloadIcon from '../../Images/Icons/download.svg'
import exclIcon from '../../Images/Icons/danger.svg'
import queslIcon from '../../Images/Icons/help.svg'
import "./steps.css";

class Steps extends Component {
    render() {
        return (
            <section className="steps-component">
                <h2 className="steps-title">INSTRUCTIONS</h2>
                <div className="steps-container">
                    <Step title="Wait for Email" image={emailIcon} content="After your purchase this bundle, K-Pay will send you an e-mail containing more information about what you purchased. The e-mail will show all clock faces/apps in the bundle with a download button next to each one of them." /> 
                    <Step title="How to Download Each Clock Face"  image={downloadIcon} content="Use that download button to go to the appstore and install the clock face/app on your watch."/>   
                    <Step title="Importan to Know"  image={exclIcon} content="If you cannot find the e-mail anymore, you can perform a lookup of all your purchases at https://k-pay.io/lookup"/>     
                    <Step title="Any Questions?"  image={queslIcon} content="Note: These download links only work if you use them on the phone or tablet on which you have installed the Fitbit!"/>   
                </div>
            </section>
        );
    }
}

export default Steps;