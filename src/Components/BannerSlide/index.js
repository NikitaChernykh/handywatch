import React, { Component } from 'react';
import Card from '../Card';
import "./banner-slide.scss";
import Button from '../Button';
class BannerSlide extends Component {
    render() {
        return (
            <div className='slide slide-50-50'>
              <Card>
                <div className="slide-content">
                  <h1 className="slide-title">{this.props.title}</h1>
                  <h2 className="slide-subtitle">{this.props.subtitle}</h2>
                  <p className="slide-description">{this.props.description}</p>
                  <Button  className="slide-button" buttonText="Download Now" />
                </div>
              </Card>
              <Card>
                <div className="slide-image-container">
                  <img className="slide-image" src={this.props.imageUrl} alt={this.props.imageAlt}/>
                </div>
              </Card>
            </div>
        );
    }
}

export default BannerSlide;