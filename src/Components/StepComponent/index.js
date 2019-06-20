import React, { Component } from 'react';
import "./step.css";
class Step extends Component {
    render() {
        return (
            <div className="step">
                <div className="step-icon"><img width="100%" src={this.props.image} alt=""/></div>
                <div className="step-content">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.content}</p>
                </div>
            </div>
        );
    }
}

export default Step;