import React, { Component } from 'react';
import ClockfaceSlider from "./ClockfaceSlider";
import Rodal from "rodal";
import {firebaseDB} from "../firebase";
import New from "./New";
import { isMobile } from "react-device-detect";
import MyLink from "./MyLink";
import { gtmEvent } from "../Utils/utils";
import modalImg from "../Images/modal.png";

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

    displayStats = stats => {
        if (stats) {
          const values = Object.values(stats);
          return values.map(value => <li key={value}>{value}</li>);
        }
      };
    render() {
        
        return (
            <div className="wrapper clockface-details-grid">
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
                        <h3>Description</h3>
                        <p className="clockface-details-description">{this.state.clockface.description}</p>
                        <h3>Stats</h3>
                        <ul className="clockface-details-stats">{this.displayStats(this.state.clockface.stats)}</ul>
                    </div>
                
                </div>
                
            </div>
        );
    }
}

export default ClockfaceDetails;