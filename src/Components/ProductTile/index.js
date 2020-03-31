import React, { Component } from 'react';
import "./product-tile.scss";
import { gtmEvent } from "../../Utils/utils";
class ProductTile extends Component {
    render() {
        const style = {
            backgroundImage: `url(${this.props.clockface.versaAPNG})`,
            backgroundPosition: 'center center no-repeat',
            backgroundSize: 'cover',
            width: '180px',
            height: '180px'
        }
        return (
          <a
            href={this.props.clockface.downloadURL}
            target="_blank"
            rel="noopener noreferrer">
          <button
            onClick={() =>
              gtmEvent(
                "Download",
                "Click",
                "Download: " + this.props.clockface.name
              )
            }
          >
            <div className="product-tile">
                <div style={style}></div>
                <div className="product-tile-name">{this.props.clockface.name}</div>
            </div>
          </button>
          </a>
        );
    }
}


export default ProductTile;