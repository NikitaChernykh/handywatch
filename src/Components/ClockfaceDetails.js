import React, { Component } from 'react';
import ClockfaceSlider from "./ClockfaceSlider";
import Rodal from "rodal";
import {firebaseDB} from "../firebase";
import MyButton from "./MyButton";
import { isMobile } from "react-device-detect";
import MyLink from "./MyLink";
import { gtmEvent } from "../Utils/utils";
import modalImg from "../Images/modal.png";
import "rodal/lib/rodal.css";
import SeeMore from './SeeMoreComponent/SeeMore';
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
  PinterestShareButton
} from 'react-share';

import {
  FacebookIcon,
  TwitterIcon,
  RedditIcon,
  PinterestIcon
} from 'react-share';

class ClockfaceDetails extends Component {
    state ={
        clockface: {}
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        const clockface = firebaseDB.ref(`clockfaces/${id}`);
        clockface.once('value').then(snapshot => {
            console.log(snapshot.val())
            this.setState({
                clockface: snapshot.val()
            });
        });
    }
    renderDownlaodButton = () => {
        if (isMobile) {
          return (
            <a
              href={this.state.clockface.downloadURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MyLink
                className="clockface-details-downloadbtn"
                onClick={() =>
                  gtmEvent(
                    "Download",
                    "Click",
                    "Download: " + this.state.clockface.name
                  )
                }
              >
                INSTALL
              </MyLink>
            </a>
          );
        }
        return (
          <MyButton
            className="clockface-details-downloadbtn"
            onClick={() => this.show("downloadVisible")}
          >
            INSTALL
          </MyButton>
        );
      };
      show(modal) {
        this.setState({ [modal]: true });
      }
    
      hide(modal) {
        this.setState({ [modal]: false });
      }
    displayStats = stats => {
        if (stats) {
          const values = Object.values(stats);
          return values.map(value => <li key={value}>{value}</li>);
        }
      };
    render() {
        
        return (
          <div>
            <div className="wrapper-details clockface-details-grid">
                <div className="clockface-details-l">
                    <div className="clockface">
                        <div className="clockface-image">
                            <ClockfaceSlider
                            versaImage={this.state.clockface.versaAPNG}
                            ionicImage={this.state.clockface.ionicAPNG}
                            />
                        </div>
                        <Rodal
                            className="modal"
                            visible={this.state.downloadVisible}
                            onClose={() => this.hide("downloadVisible")}
                            closeOnEsc={true}
                            customStyles={{
                            width: "auto",
                            height: "auto",
                            bottom: "auto",
                            left: window.innerWidth < 600 ? "5%" : "20%",
                            right: window.innerWidth < 600 ? "5%" : "20%",
                            top: "50%",
                            padding: "50px 25px 25px 25px",
                            transform: "translateY(-50%)"
                            }}
                        >
                            <div className="modal-content">
                            <h3>To download, please open this website on mobile device.</h3>
                            <p>
                                Your phone must have{" "}
                                <a
                                className="faqlink"
                                href="https://www.fitbit.com/au/app#download-now"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                Fitbit App
                                </a>{" "}
                                installed and paired with your watch.
                            </p>
                            <img src={modalImg} alt="open on mobile device" width="300" />
                            </div>
                        </Rodal>
                    </div>
                </div>
                <div className="clockface-details-r">
                    <div className="clockface-details">
                        <h2>{this.state.clockface.name}</h2>
                        {this.renderDownlaodButton()}
                        <div className="share-buttons-container">
                          <h3>Share the link:</h3>
                          <div className="share-buttons">
                            <div className="share-button" onClick={() =>
                                  gtmEvent(
                                    "Share Buttons",
                                    "Click",
                                    "Share Facebook"
                                  )
                                }>
                              <FacebookShareButton  url={window.location.href} quote={`Download ${this.state.clockface.name} for your Fitbit Watch!`} hashtag="#handywatch" >
                                <FacebookIcon />
                              </FacebookShareButton>
                            </div>
                            <div className="share-button" onClick={() =>
                                  gtmEvent(
                                    "Share Buttons",
                                    "Click",
                                    "Share Twitter"
                                  )
                                }>
                              <TwitterShareButton  hashtags={["handywatch","fitbitversa","fitbitionic"]} url={window.location.href} title="HANDY.WATCH - Beautiful Clockfaces for your Fitbit" via="handywatch">
                                <TwitterIcon />
                              </TwitterShareButton>
                            </div>
                            <div className="share-button" onClick={() =>
                                  gtmEvent(
                                    "Share Buttons",
                                    "Click",
                                    "Share Reddit"
                                  )
                                }>
                              <RedditShareButton  url={window.location.href} title="HANDY.WATCH - Beautiful Clockfaces for your Fitbit">
                                <RedditIcon />
                              </RedditShareButton>
                            </div>
                            <div className="share-button" onClick={() =>
                                  gtmEvent(
                                    "Share Buttons",
                                    "Click",
                                    "Share Pinteres"
                                  )
                                }>
                              <PinterestShareButton url={window.location.href} description="HANDY.WATCH - Beautiful Clockfaces for your Fitbit" media={this.state.clockface.versaAPNG}>
                                <PinterestIcon />
                              </PinterestShareButton>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
              </div>
              <div className="wrapper-details clockface-details-full">
                  <div className="clockface-details">
                      <h3>Description</h3>
                      <p className="clockface-details-description">{this.state.clockface.description}</p>
                      <h3>Stats</h3>
                      <ul className="clockface-details-stats">{this.displayStats(this.state.clockface.stats)}</ul>
                  </div>
              </div>
            <SeeMore></SeeMore>
          </div>
        );
    }
}

export default ClockfaceDetails;