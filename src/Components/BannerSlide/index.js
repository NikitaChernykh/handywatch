import React, { Component } from 'react';
import Card from '../Card';
import "./banner-slide.scss";
import Button from '../Button';
import { gtmEvent } from "../../Utils/utils";

class BannerSlide extends Component {
    goToURL (url) {
      window.location = url;
    }
    render() {
        const imgStyle = {
          backgroundImage: `url(${this.props.imageUrl})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: 'inherit',
          borderBottom: '1px solid black'
        };
        return (
            <div onClick={() =>{
                if(this.props.isMobile){
                  gtmEvent("Banner CTA Card", "Tap", `Download ${this.props.title}`);
                  this.goToURL(`${this.props.url}`);
                }
                return null;
              }} 
              className={`slide ${this.props.isMobile ? 'slide-100': 'slide-50-50'}`}>
              <Card isMobile={this.props.isMobile}>
                <div className={`${!this.props.isMobile ? 'slide-content': ''}`}>
                  <h1 className={`${this.props.isMobile ? 'slide-title-mob' : 'slide-title'}`}>{this.props.title}</h1>
                  <h2 className={`${this.props.isMobile ? 'slide-subtitle-mob' : 'slide-subtitle'}`}>{this.props.subtitle}</h2>
                  <p className={`${this.props.isMobile ? 'slide-description-mob': 'slide-description'}`}>{this.props.description}</p>
                  {this.props.isMobile? null : <Button url={this.props.url} bannerTitle={this.props.title} className="slide-button" buttonText={this.props.buttonText} />}
                </div>
              </Card>
              <div style={imgStyle}></div>
            </div>
        );
    }
}

export default BannerSlide;