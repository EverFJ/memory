import React from "react";
import Card from "./components/Card";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { id: 1, color: "yellow", flipped: false },
        { id: 2, color: "yellow", flipped: false },
        { id: 3, color: "red", flipped: false },
        { id: 4, color: "red", flipped: false },
        { id: 5, color: "blue", flipped: false },
        { id: 6, color: "blue", flipped: false },
        { id: 7, color: "orange", flipped: false },
        { id: 8, color: "orange", flipped: false },
      ],
      moves: 0,
      pairs: 0,
    };
  }

  render() {
    return (
      <>
        <h1>Memory Game </h1>
      </>
    );
  }
}

export default App;
