import React, { Component } from 'react';
import "./card.scss";

class Card extends Component {
    render() {
        return (
            <div className={`${this.props.isMobile ? "card-mob": "card"}`}>
                {this.props.children}
            </div>
        );
    }
}


export default Card;