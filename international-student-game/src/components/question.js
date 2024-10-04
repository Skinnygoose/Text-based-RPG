import React from 'react';

const Question = ({ question, onAnswer }) => {
  return (
    <div className="question-container">
      <h2>{question.question}</h2>
      <div className="options">
        {question.answers.map((answer, index) => (
          <button key={index} onClick={() => onAnswer(answer)}>
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
