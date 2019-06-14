import React, { Component } from "react";

class RollDice extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <div className="dice-container">
          <div className="dice-individual">
            <i class="fas fa-dice-one" />
          </div>
          <div className="dice-individual">
            <i class="fas fa-dice-one" />
          </div>
        </div>
        <div>
          <button className="roll-button">Roll dice</button>
        </div>
      </div>
    );
  }
}

export default RollDice;
