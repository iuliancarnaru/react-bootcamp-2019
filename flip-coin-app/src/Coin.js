import React, { Component } from "react";
import Image from "./Image";

class Coin extends Component {
  static defaultProps = {
    title: `Let's flip a coin`
  };

  constructor() {
    super();

    this.state = {
      coinFace: "head",

      headTimes: 0,
      tailTimes: 0,
      flips: 0
    };
  }

  handleFlip = () => {
    function generateRandom() {
      const options = ["head", "tail"];
      return options[Math.floor(Math.random() * options.length)];
    }

    let coinFace = generateRandom();

    if (coinFace === "head") {
      this.setState(prevState => ({
        ...prevState,
        coinFace,
        flips: this.state.flips + 1,
        headTimes: this.state.headTimes + 1
      }));
    } else if (coinFace === "tail") {
      this.setState(prevState => ({
        ...prevState,
        coinFace,
        flips: this.state.flips + 1,
        tailTimes: this.state.tailTimes + 1
      }));
    }
  };

  render() {
    return (
      <div className="coin-container">
        <h1>{this.props.title}</h1>
        <Image coinFace={this.state.coinFace} />
        <button onClick={this.handleFlip}>Flip me!</button>
        <div className="coin-results">
          <p>
            Out of {this.state.flips}, there have been {this.state.headTimes}{" "}
            heads and {this.state.tailTimes} tails.
          </p>
        </div>
      </div>
    );
  }
}

export default Coin;
