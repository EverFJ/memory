import React from "react";

class Card extends React.Component {
  render() {
    const { color, flipped, onClick, id } = this.props;

    // console.log(onClick);

    return (
      <>
        <div
          className="card"
          onClick={() => {
            onclick(id, flipped);
          }}
        ></div>
      </>
    );
  }
}

export default Card;
