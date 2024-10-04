import React, { useEffect, useState } from 'react';

const Timer = ({ active, question, onTimeout }) => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    if (!active) return;
    if (time === 0) {
      onTimeout(question.timeoutAction);
      return;
    }

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time, active]);

  return (
    <div id="timer-container">
      <svg width="100" height="100">
        <circle className="base-ring" cx="50" cy="50" r="45" />
        <circle
          className="progress-ring"
          cx="50"
          cy="50"
          r="45"
          strokeDasharray="283"
          strokeDashoffset={(time / 10) * 283}
        />
      </svg>
      <div id="timer-count">{time}</div>
    </div>
  );
};

export default Timer;
