import React from "react";

class Card extends React.Component {
  render() {
    const { color, flipped, onClick } = this.props;

    // console.log(onClick);

    return (
      <>
        <div className="card"></div>
      </>
    );
  }
}

export default Card;
