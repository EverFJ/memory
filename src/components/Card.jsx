import React from "react";

class Card extends React.Component {
  render() {
    const { color, flipped, onClick, key } = this.props;

    // console.log(onClick);

    return (
      <>
        <div
          className="card"
          onClick={() => {
            onclick(key, flipped);
          }}
        ></div>
      </>
    );
  }
}

export default Card;
