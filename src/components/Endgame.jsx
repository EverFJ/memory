import React from "react";

class Endgame extends React.Component {
  render() {
    return (
      <>
        <div className="endgame">
          <h2>Félicitation</h2>
          <p>Vous avez gagné en {this.props.moves} essais</p>
        </div>
      </>
    );
  }
}

export default Endgame;
