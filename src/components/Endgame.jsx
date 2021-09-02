import React from "react";

class Endgame extends React.Component {
  render() {
    const { moves } = this.props;
    let star = <img src="https://img.icons8.com/fluency/50/000000/star.png" />;

    let starsNumber = 0;
    if (moves <= 14) {
      starsNumber = 3;
    } else if (moves > 14 && moves <= 19) {
      starsNumber = 2;
    } else if (moves > 19) {
      starsNumber = 1;
    }

    return (
      <>
        <div className="endgame">
          <h2>Congratulations !!!</h2>
          <p>You won in {moves} tries</p>
          <p>
            Rating :{starsNumber === 3 && star} {starsNumber === 3 && star}{" "}
            {starsNumber === 3 && star}
            {starsNumber === 2 && star} {starsNumber === 2 && star}
            {starsNumber === 1 && star}
          </p>
        </div>
      </>
    );
  }
}

export default Endgame;
