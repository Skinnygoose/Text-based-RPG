import React from 'react';

const Question = ({ question, onAnswer }) => {
  return (
    <div id="question-container" className="fade-in visible">
    <h2 id="question">{question.question}</h2>
    <div className="answers">
      {question.answers.map((answer, index) => (
        <button className="answer-button" key={index} onClick={() => onAnswer(answer)}>
          {answer.text}
        </button>
      ))}
    </div>
  </div>
  );
};

export default Question;
