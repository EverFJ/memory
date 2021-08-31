import React from "react";

class Card extends React.Component {
  render() {
    const { color, isFlipped, onClick, id } = this.props;

    // console.log(onClick);

    return (
      <>
        <div
          className={`card ${isFlipped && "flipped"} ${color}`}
          onClick={() => {
            onclick(id, isFlipped);
          }}
        ></div>
      </>
    );
  }
}

export default Card;
