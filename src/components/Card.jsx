import React from "react";

class Card extends React.Component {
  render() {
    console.log(this.props);
    let { color, isFlipped, onClick, id } = this.props;

    const style = {
      transform: `${!isFlipped ? "rotateX(180deg)" : ""} `,
    };
    return (
      <>
        <div
          className={`card ${isFlipped && "flipped"} ${color}`}
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
