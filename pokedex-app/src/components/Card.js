import React from "react";

const padToThree = number => (number <= 999 ? `00${number}`.slice(-3) : number);

const Card = props => {
  const { id, name, type, experience } = props;
  return (
    <div className="card">
      <h1 className="card-title">{name}</h1>

      <div className="card-image">
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToThree(
            id
          )}.png`}
          alt={name}
        />
      </div>
      <div className="card-data">{type}</div>
      <div className="card-data">{experience}</div>
    </div>
  );
};

export default Card;
