import React from "react";

class Card extends React.Component {
  render() {
    let { color, isFlipped, onClick, id } = this.props;

    const style = {
      transform: `${!isFlipped ? "rotateX(180deg)" : ""} `,
    };
    return (
      <>
        <div
          className={`card ${isFlipped && "flipped"} ${
            !isFlipped && "rotate"
          } ${color}`}
          style={style}
          onClick={() => {
            onClick(id);
          }}
        ></div>
      </>
    );
  }
}

export default Card;
