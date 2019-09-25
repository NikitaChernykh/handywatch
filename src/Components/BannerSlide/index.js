import React, { Component } from 'react';
import "./banner-slide.scss";
class BannerSlide extends Component {
    render() {
        return (
            <div className='slide'>
              <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
              </div>
              <div>
                <p>IMAGE</p>
              </div>
            </div>
        );
    }
}

export default BannerSlide;