import React, { Component } from "react";
import Die from "./Die";

class RollDice extends Component {
  constructor(props) {
    super();

    this.state = {
      dice1: "one",
      dice2: "six"
    };
  }

  handleRoll = () => {
      const faces = ["one", "two", "three", "four", "five", "six"];
      
      let random1 = Math.floor(Math.random() * faces.length);
      let random2 = Math.floor(Math.random() * faces.length);

      this.setState({
            dice1: faces[random1],
            dice2: faces[random2],
        })
  };

  //   handleRoll = event => {
  //     let random1 = Math.floor(Math.random() * 6) + 1;
  //     let random2 = Math.floor(Math.random() * 6) + 1;

  //     function changeNumberToString(number) {
  //       switch (number) {
  //         case 1:
  //           return "one";
  //         case 2:
  //           return "two";
  //         case 3:
  //           return "three";
  //         case 4:
  //           return "four";
  //         case 5:
  //           return "five";
  //         case 6:
  //           return "six";
  //         default:
  //           return number;
  //       }
  //     }

  //     this.setState({
  //       dice1: changeNumberToString(random1),
  //       dice2: changeNumberToString(random2)
  //     });
  //   };

  render() {
    const { dice1, dice2 } = this.state;
    return (
      <div>
        <div className="dice-container">
          <Die face={dice1} />
          <Die face={dice2} />
        </div>
        <div className="roll-button-container">
          <button className="roll-button" onClick={this.handleRoll}>
            Roll dice
          </button>
        </div>
      </div>
    );
  }
}

export default RollDice;
