import React from "react";

class Card extends React.Component {
  render() {
    console.log(this.props);
    let { color, isFlipped, onClick, id } = this.props;

    return (
      <>
        <div
          className={`card ${isFlipped && "flipped"} ${color}`}
          onClick={() => {
            onClick(id);
          }}
        ></div>
      </>
    );
  }
}

export default Card;
