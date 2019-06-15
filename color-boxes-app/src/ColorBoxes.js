import React, { Component } from "react";
import { choice } from "./helpers";

class ColorBoxes extends Component {
  static defaultProps = {
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
      "cornflowerblue"
    ]
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>ColorBox App</h1>
        <div className="color-box-container">
          {this.props.colors.map(color => {
            let bgColor = choice(this.props.colors);
            return (
              <div
                className="color-box"
                style={{ backgroundColor: `${bgColor}` }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorBoxes;
