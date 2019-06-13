import React, { Component } from "react";
import Card from "./Card";

class Pokedex extends Component {
  render() {
    return (
      <div className="pokedex">
        <p className="pokedex-experience">Total experience: {this.props.exp}</p>
        <span className={this.props.isWinner ? "winner" : "loser"}>
          {this.props.isWinner ? `WINNER!` : `LOSER...`}
        </span>
        <div className="pokedex-cards">
          {this.props.pokemon.map(item => (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              type={item.type}
              experience={item.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
