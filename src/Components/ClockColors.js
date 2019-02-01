import React, { Component } from "react";
import {
  IonicAdidas,
  IonicSport,
  IonicCharcoal,
  IonicCobalt,
  IonicCoral,
  IonicGrey,
  IonicOrange,
  VersaBlack,
  VersaCharcoal,
  VersaLavender,
  VersaLeather,
  VersaPeach,
  VersaSilver,
  VersaGrey
} from "./Images";
class ClockColors extends Component {
  state = {
    watch: 0,
    colorOptions: {
      versa: {
        versaBlack: {
          color: VersaBlack,
          name: "versa black watch"
        },
        versaGrey: {
          color: VersaGrey,
          name: "versa grey watch"
        },
        versaLeather: {
          color: VersaLeather,
          name: "versa leather watch"
        },
        versaPeach: {
          color: VersaPeach,
          name: "versa peach watch"
        },
        versaCharcoal: {
          color: VersaCharcoal,
          name: "versa charcoal watch"
        },
        versaLavender: {
          color: VersaLavender,
          name: "versa lavender watch"
        },
        versaSilver: {
          color: VersaSilver,
          name: "versa silver watch"
        }
      },
      ionic: {
        ionicAdidas: {
          color: IonicAdidas,
          name: "ionic adidas watch"
        },
        ionicSport: {
          color: IonicSport,
          name: "ionic sport watch"
        },
        ionicCobalt: {
          color: IonicCobalt,
          name: "ionic cobalt watch"
        },
        ionicCoral: {
          color: IonicCoral,
          name: "ionic coral watch"
        },
        ionicGrey: {
          color: IonicGrey,
          name: "ionic grey watch"
        },
        ionicOrange: {
          color: IonicOrange,
          name: "ionic orange watch"
        },
        ionicCharcoal: {
          color: IonicCharcoal,
          name: "ionic charcoal watch"
        }
      }
    }
  };

  saveColor = number => {
    this.props.changeWatch(number);
    this.setState({
      watch: number
    });
  };

  showWatchOptions = () => {
    if (this.props.watch === "ionic") {
      return (
        <div className={this.props.type}>
          <button onClick={() => this.saveColor(0)}>
            <img
              className="clockcolors-color"
              src={this.state.colorOptions.ionic.ionicAdidas.color}
              alt={this.state.colorOptions.ionic.ionicAdidas.name}
            />
          </button>
          <button onClick={() => this.saveColor(1)}>
            <img
              className="clockcolors-color"
              src={this.state.colorOptions.ionic.ionicSport.color}
              alt={this.state.colorOptions.ionic.ionicSport.name}
            />
          </button>
          <button onClick={() => this.saveColor(2)}>
            <img
              className="clockcolors-color"
              src={this.state.colorOptions.ionic.ionicCobalt.color}
              alt={this.state.colorOptions.ionic.ionicCobalt.name}
            />
          </button>
          <button onClick={() => this.saveColor(3)}>
            <img
              className="clockcolors-color"
              src={this.state.colorOptions.ionic.ionicCoral.color}
              alt={this.state.colorOptions.ionic.ionicCoral.name}
            />
          </button>
          <button onClick={() => this.saveColor(4)}>
            <img
              className="clockcolors-color"
              src={this.state.colorOptions.ionic.ionicGrey.color}
              alt={this.state.colorOptions.ionic.ionicGrey.name}
            />
          </button>
          <button onClick={() => this.saveColor(5)}>
            <img
              className="clockcolors-color"
              src={this.state.colorOptions.ionic.ionicOrange.color}
              alt={this.state.colorOptions.ionic.ionicOrange.name}
            />
          </button>
          <button onClick={() => this.saveColor(6)}>
            <img
              className="clockcolors-color"
              src={this.state.colorOptions.ionic.ionicCharcoal.color}
              alt={this.state.colorOptions.ionic.ionicCharcoal.name}
            />
          </button>
        </div>
      );
    } else {
      return (
        <div className={this.props.type}>
          <button onClick={() => this.saveColor(0)}>
            <img
              className="clockcolors-color"
              src={this.state.colorOptions.versa.versaBlack.color}
              alt={this.state.colorOptions.versa.versaBlack.name}
            />
          </button>
          <button onClick={() => this.saveColor(1)}>
            <img
              className="clockcolors-color"
              src={this.state.colorOptions.versa.versaGrey.color}
              alt={this.state.colorOptions.versa.versaGrey.name}
            />
          </button>
          <button onClick={() => this.saveColor(2)}>
            <img
              className="clockcolors-color"
              src={this.state.colorOptions.versa.versaLeather.color}
              alt={this.state.colorOptions.versa.versaLeather.name}
            />
          </button>
          <button onClick={() => this.saveColor(3)}>
            <img
              className="clockcolors-color"
              src={this.state.colorOptions.versa.versaPeach.color}
              alt={this.state.colorOptions.versa.versaPeach.name}
            />
          </button>
          <button onClick={() => this.saveColor(4)}>
            <img
              className="clockcolors-color"
              src={this.state.colorOptions.versa.versaCharcoal.color}
              alt={this.state.colorOptions.versa.versaCharcoal.name}
            />
          </button>
          <button onClick={() => this.saveColor(5)}>
            <img
              className="clockcolors-color"
              src={this.state.colorOptions.versa.versaLavender.color}
              alt={this.state.colorOptions.versa.versaLavender.name}
            />
          </button>
          <button onClick={() => this.saveColor(6)}>
            <img
              className="clockcolors-color"
              src={this.state.colorOptions.versa.versaSilver.color}
              alt={this.state.colorOptions.versa.versaSilver.name}
            />
          </button>
        </div>
      );
    }
  };

  render() {
    return this.showWatchOptions();
  }
}

export default ClockColors;
