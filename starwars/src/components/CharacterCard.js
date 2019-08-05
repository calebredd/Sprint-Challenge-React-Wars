import React from "react";
import { Card, Image } from "semantic-ui-react";

// import 'semantic-ui-css/semantic.min.css';

export default function CharacterCard(props) {
  // console.log(props.character);
  const {
    name,
    birth_year,
    gender,
    homeworld
    // species,
    // starships,
    // films
  } = props.character;
  return (
    <Card>
      <Image
        size="medium"
        circular
        src="/starwars/src/photos/C390.jpeg"
        wrapped
        ui={false}
        alt="Face"
      />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>
          Born: {birth_year} Gender: {gender}
        </Card.Description>
        <Card.Meta>
          Planet: <a href={homeworld}>{homeworld}</a>
        </Card.Meta>
      </Card.Content>
    </Card>
  );
}
