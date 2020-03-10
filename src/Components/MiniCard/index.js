import React, { Component } from 'react';
import "./minicard.scss";
import MyLink from "../MyLink";
import { gtmEvent } from "../../Utils/utils";
class MiniCard extends Component {
    // TODO rename to Tile
    render() {
        const style = {
            backgroundImage: `url(${this.props.clockface.versaAPNG})`,
            backgroundPosition: 'center center no-repeat',
            backgroundSize: 'cover',
            width: '180px',
            height: '180px'
        }
        return (
            
            <MyLink
            onClick={() =>
              gtmEvent(
                "Download",
                "Click",
                "Download: " + this.props.clockface.name
              )
            }
          >
            <div className="minicard">
                <div style={style}></div>
                <div className="minicard-details" >{this.props.clockface.name}</div>
            </div>
          </MyLink>
        );
    }
}


export default MiniCard;