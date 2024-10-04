// // StatusBars.js
// import React from 'react';
// import './statusBar.css';

// const StatusBars = ({ money, mentalHealth }) => {
//   return (
//     <div className="status-bars">
//       <div className="status-bar">
//         <label htmlFor="money-bar">Money: ${money}</label>
//         <progress id="money-bar" value={money} max="100"></progress>
//       </div>
//       <div className="status-bar">
//         <label htmlFor="mental-health-bar">Mental Health: {mentalHealth}%</label>
//         <progress id="mental-health-bar" value={mentalHealth} max="100"></progress>
//       </div>
//     </div>
//   );
// };

// export default StatusBars;
import React from 'react';

const StatusBars = ({ stress, money }) => {
  return (
    <div className="status-bars">
      <div className="bar-container">
        <p>Stress: {stress}</p>
        <div id="stress-bar" style={{ height: `${(stress / 100) * 100}%` }}></div>
      </div>
      <div className="bar-container">
        <p>Money: ${money}</p>
        <div id="money-bar" style={{ height: `${(money / 1000) * 100}%` }}></div>
      </div>
    </div>
  );
};

export default StatusBars;
