import React, { useEffect, useState } from "react";
import "./memoryGameTeen.css";

const emojis = ["🐶","🐶","🐱","🐱","🐸","🐸","🐼","🐼","🦊","🦊","🐯","🐯"];

export default function MemoryGameTeen() {
  const [cards, setCards] = useState([]);
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [lock, setLock] = useState(false);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [won, setWon] = useState(false);

  useEffect(() => shuffle(), []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!won) setTime(t => t + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [won]);

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
    setMoves(0);
    setTime(0);
    setWon(false);
    setFirst(null);
    setSecond(null);
  }

  function click(card) {
    if (lock || card.flipped || card.matched) return;

    setCards(c =>
      c.map(x => x.id === card.id ? { ...x, flipped: true } : x)
    );

    if (!first) {
      setFirst(card);
    } else {
      setSecond(card);
      setMoves(m => m + 1);
      setLock(true);
    }
  }

  useEffect(() => {
    if (!first || !second) return;

    if (first.emoji === second.emoji) {
      setCards(c =>
        c.map(x =>
          x.emoji === first.emoji ? { ...x, matched: true } : x
        )
      );
      checkWin();
      reset();
    } else {
      setTimeout(() => {
        setCards(c =>
          c.map(x =>
            x.matched ? x : { ...x, flipped: false }
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

  function checkWin() {
    const done = cards.every(c => c.matched || c.flipped);
    if (done) setWon(true);
  }

  return (
    <div className="teen-wrap">
      <h2>Memory Challenge 🧠</h2>

      <div className="stats">
        <span>Moves: {moves}</span>
        <span>Time: {time}s</span>
      </div>

      <div className="grid">
        {cards.map(card => (
          <div
            key={card.id}
            className={`card ${card.flipped || card.matched ? "show" : ""}`}
            onClick={() => click(card)}
          >
            {card.flipped || card.matched ? card.emoji : "❓"}
          </div>
        ))}
      </div>

      {won && <h3>🎉 You Win! Great memory!</h3>}

      <button onClick={shuffle}>Restart</button>
    </div>
  );
}
