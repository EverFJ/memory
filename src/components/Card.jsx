import React from "react";

class Card extends React.Component {
  render() {
    console.log(this.props);
    const { color, isFlipped, onClick, id } = this.props;
    console.log(isFlipped);

    return (
      <>
        <div
          className={`card ${isFlipped && "flipped"} ${color}`}
          onClick={() => {
            onClick(id, isFlipped);
          }}
        ></div>
      </>
    );
  }
}

export default Card;
