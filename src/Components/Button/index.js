import React, { Component } from 'react';
import "./button.scss";
class Button extends Component {
    render() {
        return (
            <button className="hw-button">{this.props.buttonText}</button>
        );
    }
}

export default Button;