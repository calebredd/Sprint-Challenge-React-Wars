import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

import "./App.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      // .get("https://swapi.co/api/people")
      .get("db.json")
      .then(api => {
        console.log(api.data.results);
        // console.log(api);
        const list = Object.values(api.data.results);
        setCharacters(list);


        // api.data.results.forEach((character)=>{
        // setCharacters(characters+character);
        // });
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="Cards">
        {characters.map(character => (
          <Card key={character.name} character={character} />
        ))}
      </div>
    </div>
  );
};

export default App;
