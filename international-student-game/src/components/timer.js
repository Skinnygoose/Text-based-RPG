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
    <div className="timer">
      <p>Time remaining: {time}</p>
    </div>
  );
};

export default Timer;
