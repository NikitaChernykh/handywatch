import React, { Component } from 'react';
import "./button.scss";
import { gtmEvent } from "../../Utils/utils";
class Button extends Component {
    goToURL (url) {
        window.location = url;
    }
    render() {
        return (
            <button onClick={() =>{gtmEvent("Banner CTA Button", "Click", `Download ${this.props.bannerTitle}`); this.goToURL(`${this.props.url}`)}} className="hw-button">{this.props.buttonText}</button>
        );
    }
}

export default Button;