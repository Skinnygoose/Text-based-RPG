import React from 'react';

const Prologue = ({ chapter, onStart }) => {
  return (
    <div id="prologue-container" className="fade-in visible">
      <div className="monologue">
        {chapter.startPrologue.map((line, index) => (
          <p id="monologue" key={index}>{line}</p>
        ))}
        <button id="startJourney" onClick={onStart}>Start Journey</button>
      </div>
    </div>
  );
};

export default Prologue;
