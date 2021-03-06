import React from "react";
import Card from "./components/Card";
import Endgame from "./components/Endgame";
import Timer from "./components/Timer";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { id: "1", color: "yellow", isFlipped: true },
        { id: "2", color: "yellow", isFlipped: true },
        { id: "3", color: "red", isFlipped: true },
        { id: "4", color: "red", isFlipped: true },
        { id: "5", color: "blue", isFlipped: true },
        { id: "6", color: "blue", isFlipped: true },
        { id: "7", color: "magenta", isFlipped: true },
        { id: "8", color: "magenta", isFlipped: true },
        { id: "9", color: "violet", isFlipped: true },
        { id: "10", color: "violet", isFlipped: true },
        { id: "11", color: "green", isFlipped: true },
        { id: "12", color: "green", isFlipped: true },
        { id: "13", color: "salmon", isFlipped: true },
        { id: "14", color: "salmon", isFlipped: true },
        { id: "15", color: "brown", isFlipped: true },
        { id: "16", color: "brown", isFlipped: true },
      ],
      moves: 0,
      pairs: [],
      timerOn: false,
      timerStart: 0,
      timerTime: 0,
    };
  }
  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime,
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart,
      });
    }, 1000);
  };

  stopTimer = () => {
    if (this.state.timerOn) {
      this.setState({ timerOn: false });
      clearInterval(this.timer);
    }
  };

  shuffle = (cards) => {
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
    const newCards = [...cards];
    newCards.map((elem) => (elem.isFlipped = true));
    this.setState({
      cards: newCards,
      moves: 0,
      pairs: [],
    });
    this.startTimer();
  };

  resetPage = () => {
    window.location.reload();
  };

  handleCardClick = (id) => {
    let newCards = [...this.state.cards];
    const clickedCard = this.state.cards.find((elem) => elem.id === id);
    let pairs = [...this.state.pairs];

    if (this.state.pairs.length % 2 === 0) {
      clickedCard.isFlipped = false;
      pairs.push(clickedCard);
      let moves = this.state.moves;
      moves++;
      this.setState({
        cards: newCards,
        pairs: pairs,
        moves: moves,
      });
    } else {
      if (
        clickedCard.color ===
        this.state.pairs[this.state.pairs.length - 1].color
      ) {
        pairs.push(clickedCard);
        clickedCard.isFlipped = false;

        this.setState({
          cards: newCards,
          pairs: pairs,
        });
      } else {
        const firstCard = this.state.cards.find(
          (elem) => elem.id === this.state.pairs[this.state.pairs.length - 1].id
        );

        clickedCard.isFlipped = false;
        pairs.pop();

        setTimeout(() => {
          clickedCard.isFlipped = true;
          firstCard.isFlipped = true;
        }, 100);
        this.setState({
          cards: newCards,
          pairs: pairs,
        });
      }
    }
  };

  componentDidMount() {
    console.log("did mount");
    this.startTimer();
    this.shuffle(this.state.cards);
  }

  render() {
    return (
      <>
        <div className="container">
          <h1 className="title">MemoraVirus</h1>
          <p className="try">Tries : {this.state.moves}</p>
          <Timer
            timerOn={this.state.timerOn}
            timerTime={this.state.timerTime}
            timerStart={this.state.timerStart}
          />
          <button
            className="reset"
            onClick={() => {
              this.resetPage();
            }}
          >
            Reset
          </button>
        </div>
        {this.state.cards.length === this.state.pairs.length &&
          this.stopTimer()}
        {this.state.cards.length === this.state.pairs.length ? (
          <Endgame moves={this.state.moves} />
        ) : (
          <div className="grid">
            {this.state.cards.map((elem, index) => {
              return (
                <Card
                  color={elem.color}
                  isFlipped={elem.isFlipped}
                  id={elem.id}
                  onClick={this.handleCardClick}
                />
              );
            })}
          </div>
        )}
      </>
    );
  }
}

export default App;
