import React, { useState } from "react";
import "./App.css";
import Cards from "./comp/cards";
import Confetti from 'react-confetti';

function App() {
  const [cards, setCards] = useState(generateRandomNum);
  const [bool, setBool] = useState(false);
  function generateRandomNum() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr[i] = {
        id: i,
        value: Math.floor(Math.random() * 6) + 1,
        isFlipped: false,
      };
    }
    return arr;
  }

  function handleCard(id) {
    let arrCards = cards.map((card) => {
      if (card.id === JSON.parse(id)) {
        card.isFlipped = !card.isFlipped;
        return card;
      } else {
        return card;
      }
    });

    setCards([...arrCards]);
  }
  React.useEffect(() => {
    let val = cards[2].value;
    let condition =
      cards.every((card) => card.isFlipped) &&
      cards.every((card) => card.value === val);

    if (condition) {
      setBool("New Game");
    }
  }, [cards]);

  function handleRoll(e) {
    if (e) {
      setCards(generateRandomNum());

      setBool(false)
    } else {
      const rolledArr = cards.map((card) => {
        if (card.isFlipped === false) {
          card.value = Math.floor(Math.random() * 6) + 1;
          return card;
        } else {
          return card;
        }
      });

      setCards([...rolledArr]);
    }
  }

  const dispCard = cards.map((card, index) => {
    return (
      <Cards
        key={index}
        id={card.id}
        value={card.value}
        isFlipped={card.isFlipped}
        handleCard={handleCard}
      />
    );
  });

  return (
    <div className="game-container">
      {bool && <Confetti/>}
      <div className="text-container">
        <h1>Tenzies</h1>
        <div className="instructions-container">
          <p className="instructions">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
        </div>
      </div>

      <div className="card-container">{dispCard}</div>
      <div className="button-container">
        <button className="button" onClick={(e) => handleRoll(bool)} style={{
            backgroundColor: bool? "#DB4437":"#5035FF"
        }}>
          {!bool ? "Roll" : "New Game"}
        </button>
      </div>

    </div>
  );
}

export default App;
