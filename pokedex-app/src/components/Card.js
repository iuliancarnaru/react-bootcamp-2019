import React from "react";

const Card = props => {
  const { id, name, type, experience } = props;
  return (
    <div className="card">
      <h1>{name}</h1>
      <img
        src={`https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
      />
      <div>
        {type} : {experience}
      </div>
    </div>
  );
};

export default Card;
