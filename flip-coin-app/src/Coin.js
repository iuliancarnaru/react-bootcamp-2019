import React from "react";

function Coin(props) {
  console.log(props);
  return (
    <div>
      <img src={props.imgSrc} alt={props.side} />
    </div>
  );
}

export default Coin;
