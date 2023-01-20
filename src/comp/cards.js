import React from "react";

function Cards(props) {
  const styles = {
    backgroundColor: props.isFlipped ? "#59E391" : "white",
  };

  return (
    <div
      className="card"
      style={styles}
      id={props.id}
      onClick={(e) => props.handleCard(e.target.id)}
    >
      {props.value}
    </div>
  );
}

export default Cards;
