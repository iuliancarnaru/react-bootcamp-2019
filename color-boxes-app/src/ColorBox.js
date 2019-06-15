import React, { Component } from "react";
import { choice } from "./helpers";

class ColorBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: choice(this.props.colors)
    };
  }

  pickColor = () => {
    let newColor; 

    do {
      newColor = choice(this.props.colors);
    } while (newColor === this.state.color)

    this.setState({ color: newColor });
  };

  handleClick = event => {
    this.pickColor();
  };

  render() {
    return (
      <div
        className="color-box"
        style={{ backgroundColor: `${this.state.color}` }}
        onClick={this.handleClick}
      />
    );
  }
}

export default ColorBox;
