import React, { Component } from 'react';
import "./scrollable-category.scss";
import ProductTile from "../ProductTile";
class ScrollableCategory extends Component {
    showClockfaces = clockfaces =>
    clockfaces
      ? clockfaces.slice(0, 5).map(clockface => (
          <li bottom key={clockface.id}>
            <ProductTile
              clockface={clockface}
              versaImage={clockface.versaAPNG}
              ionicImage={clockface.ionicAPNG}
              linkto={clockface.downloadURL}
              type={clockface.type}
            />
          </li>
        ))
      : null;
    render() {
        return (
            <ul className={`horizontal-scroll-container ${this.props.isMobile ? '' : 'hide-scroll-bar'}`}>
                {this.showClockfaces(this.props.list)}
            </ul>
        );
    }
}


export default ScrollableCategory;