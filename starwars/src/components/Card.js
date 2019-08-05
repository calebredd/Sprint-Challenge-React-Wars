import React from "react";

export default function Card(props) {
  console.log(props.character);
  return (
    <div>
      Card for {props.character.name}
    </div>
  );
}
