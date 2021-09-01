import React from "react";

class Endgame extends React.Component {
  render() {
    const { moves } = this.props;
    let starsNumber = 0;
    if (moves <= 12) {
      starsNumber = 3;
    } else if (moves > 12 && moves <= 16) {
      starsNumber = 2;
    } else if (moves > 16 && moves <= 20) {
      starsNumber = 1;
    }
    const star = (
      <img src="https://img.icons8.com/fluency/50/000000/star.png" />
    );
    return (
      <>
        <div className="endgame">
          <h2>Félicitation</h2>
          <p>Vous avez gagné en {moves} essais</p>
          <p>Vous avez {starsNumber} étoile(s)</p>
        </div>
      </>
    );
  }
}

export default Endgame;
