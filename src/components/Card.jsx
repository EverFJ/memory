import React from "react";

class Card extends React.Component {
  render() {
    let { color, isFlipped, onClick, id } = this.props;

    return (
      <>
        <div
          className={`card ${isFlipped && "flipped"} ${
            !isFlipped && "rotate"
          } ${color}`}
          onClick={
            isFlipped
              ? () => {
                  onClick(id);
                }
              : null
          }
        ></div>
      </>
    );
  }
}

export default Card;
