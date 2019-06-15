import React, { Component } from "react";
import { choice } from "./helpers";
import Coin from "./Coin";

class CoinContainer extends Component {
  static defaultProps = {
    faces: [
      {
        side: "head",
        imgSrc: "https://i.ebayimg.com/images/g/Md0AAOSw8AtbeDTC/s-l1600.jpg"
      },
      {
        side: "tail",
        imgSrc: "https://i.ebayimg.com/images/g/jZwAAOSwh81beDS7/s-l1600.jpg"
      }
    ]
  };

  constructor(props) {
    super(props);

    this.state = {
      currFace: null,
      nTails: 0,
      nHeads: 0,
      nFlips: 0
    };
  }

  flipCoin = () => {
    const newFace = choice(this.props.faces);

    this.setState(prevState => ({
      currFace: newFace,
      nFlips: prevState.nFlips + 1,
      nHeads: prevState.nHeads + (newFace.side === "head" ? 1 : 0),
      nTails: prevState.nTails + (newFace.side === "tail" ? 1 : 0)
    }));
  };

  handleFlip = event => {
    this.flipCoin();
  };

  render() {
    return (
      <div className="coin-container">
        <h1>Let's flip a coin ...</h1>
        {this.state.currFace && (
          <Coin
            side={this.state.currFace.side}
            imgSrc={this.state.currFace.imgSrc}
          />
        )}
        <button onClick={this.handleFlip}>Flip me!</button>
        <div className="coin-results">
          <p>
            Out of {this.state.nFlips}, there have been {this.state.nHeads}{" "}
            heads and {this.state.nTails} tails.
          </p>
        </div>
      </div>
    );
  }
}

export default CoinContainer;
