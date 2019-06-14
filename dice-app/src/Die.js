import React from "react";

function Die(props) {
  return (
    <div className="dice-individual">
      <i className={`fas fa-dice-${props.face}`} />
    </div>
  );
}

export default Die;
