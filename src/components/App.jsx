import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function createCard(props) {
  return (
    <Card
      id={props.id}
      key={props.id}
      emoji={props.emoji}
      name={props.name}
      meaning={props.meaning}
    />
  );
}

function App() {
  return (
    <div className="dictionary ">
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createCard)}
    </div>
  );
}

export default App;
