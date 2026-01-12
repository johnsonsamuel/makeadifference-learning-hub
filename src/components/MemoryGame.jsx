import React, { useState, useEffect } from "react";
import "./memoryGame.css";

const emojis = ["🐶","🐶","🐱","🐱","🐸","🐸","🐼","🐼"];

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [lock, setLock] = useState(false);

  useEffect(() => {
    shuffle();
  }, []);

  function shuffle() {
    const shuffled = [...emojis]
      .sort(() => 0.5 - Math.random())
      .map((e, i) => ({
        id: i,
        emoji: e,
        flipped: false,
        matched: false,
      }));
    setCards(shuffled);
  }

  function clickCard(card) {
    if (lock || card.flipped || card.matched) return;

    const newCards = cards.map(c =>
      c.id === card.id ? { ...c, flipped: true } : c
    );
    setCards(newCards);

    if (!first) {
      setFirst(card);
    } else {
      setSecond(card);
      setLock(true);
    }
  }

  useEffect(() => {
    if (!first || !second) return;

    if (first.emoji === second.emoji) {
      setCards(cards =>
        cards.map(c =>
          c.emoji === first.emoji ? { ...c, matched: true } : c
        )
      );
      reset();
    } else {
      setTimeout(() => {
        setCards(cards =>
          cards.map(c =>
            c.matched ? c : { ...c, flipped: false }
          )
        );
        reset();
      }, 800);
    }
  }, [second]);

  function reset() {
    setFirst(null);
    setSecond(null);
    setLock(false);
  }

  return (
    <div className="memory-wrap">
      <h2>Memory Game 🧠</h2>

      <div className="grid">
        {cards.map(card => (
          <div
            key={card.id}
            className={`card ${card.flipped || card.matched ? "show" : ""}`}
            onClick={() => clickCard(card)}
          >
            {card.flipped || card.matched ? card.emoji : "❓"}
          </div>
        ))}
      </div>

      <button onClick={shuffle}>Restart</button>
    </div>
  );
}
