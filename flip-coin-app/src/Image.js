import React from "react";

function Image(props) {
  const head = `Md0AAOSw8AtbeDTC`;
  const tail = `jZwAAOSwh81beDS7`;

  return (
    <div className="image">
      <img
        src={`https://i.ebayimg.com/images/g/${
          props.coinFace === "head" ? head : tail
        }/s-l1600.jpg`}
        alt="coin head"
      />
    </div>
  );
}

export default Image;

// https://i.ebayimg.com/images/g/Md0AAOSw8AtbeDTC/s-l1600.jpg - head
// https://i.ebayimg.com/images/g/jZwAAOSwh81beDS7/s-l1600.jpg - tail
