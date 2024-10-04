import React from 'react';

const GameOver = ({ onRestart }) => {
  return (
    <div className="game-over">
      <h2>Game Over</h2>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
};

export default GameOver;
