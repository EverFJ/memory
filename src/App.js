import React from "react";
import Card from "./components/Card";
import Endgame from "./components/Endgame";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { id: "1", color: "yellow", flipped: false },
        { id: "2", color: "yellow", flipped: false },
        { id: "3", color: "red", flipped: false },
        { id: "4", color: "red", flipped: false },
        { id: "5", color: "blue", flipped: false },
        { id: "6", color: "blue", flipped: false },
        { id: "7", color: "orange", flipped: false },
        { id: "8", color: "orange", flipped: false },
      ],
      moves: 0,
      pairs: 0,
    };
  }

  handleResetButton = (cards) => {
    let currentIndex = cards.length,
      temporaryValue,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    }
    this.setState({
      cards: cards,
      moves: 0,
      pairs: 0,
    });
  };

  handleCardClick = (e) => {};

  render() {
    console.log(this.state.cards);

    return (
      <>
        <h1 className="title">Memory Game </h1>
        <div className="grid">
          {this.state.cards.map((elem, index) => {
            return (
              <Card
                color={elem.color}
                flipped={elem.flipped}
                key={elem.id}
                onClick={this.handleCardClick}
              />
            );
          })}
        </div>
        <button
          className="reset"
          onClick={() => {
            this.handleResetButton(this.state.cards);
          }}
        >
          Reset
        </button>
      </>
    );
  }
}

export default App;
