import React, { Component } from "react";

class RollDice extends Component {
    constructor(props) {
        super();

        this.state = {
            dice1: 'one',
            dice2: 'six'
        };
    }

    handleRoll = event => {
        let random1 = Math.floor(Math.random() * 6) + 1;
        let random2 = Math.floor(Math.random() * 6) + 1;

        this.setState({
            dice1: random1,
            dice2: random2
        });
    };

    render() {
        const { dice1, dice2 } = this.state;
        return (
            <div>
                <div className="dice-container">
                    <div className="dice-individual">
                        <i className={`fas fa-dice-${dice1}`} />
                    </div>
                    <div className="dice-individual">
                        <i className={`fas fa-dice-${dice2}`} />
                    </div>
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
