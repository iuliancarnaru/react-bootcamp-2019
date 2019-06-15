import React, { Component } from "react";
import ColorBox from "./ColorBox";

class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 20,
    colors: [
      "aquamarine",
      "tomato",
      "greenyellow",
      "purple",
      "goldenrod",
      "grey",
      "red",
      "violet",
      "maroon",
      "cornflowerblue",
      "wheat",
      "black",
      "teal",
      "navy",
      "magenta"
    ]
  };
  
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <ColorBox colors={this.props.colors} />
    ));
    return <div className="color-box-container">{boxes}</div>;
  }
}

export default BoxContainer;
