import React from 'react';

const Prologue = ({ chapter, onStart }) => {
  return (
    <div className="prologue">
      <h2>{chapter.title}</h2>
      <p>{chapter.startPrologue}</p>
      <button onClick={onStart}>Start Chapter</button>
    </div>
  );
};

export default Prologue;
