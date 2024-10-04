// import React, { useState, useEffect } from 'react';
// import StoryCard from './components/story-card';
// import QuestionCard from './components/question-card'; // Import the QuestionCard component
// import { fetchNextCard } from './components/cardNavigation'; // Import the navigation logic
// import './App.css';


// function App() {
//   const [currentCard, setCurrentCard] = useState(null); // To store the current card data
//   const [currentCardType, setCurrentCardType] = useState(null); // To store the current card type ('story' or 'question')

//   useEffect(() => {
//     // Fetch the first card when the app loads
//     const fetchInitialCard = async () => {
//       try {
//         const initialCard = await fetchNextCard('66f672f57e60d348a2dec24a', 'story'); // Assuming first card is a story card
//         setCurrentCard(initialCard);
//         setCurrentCardType('story'); // Set the card type as 'story' initially
//       } catch (error) {
//         console.error('Error fetching the initial card:', error);
//       }
//     };

//     fetchInitialCard();
//   }, []);

//   // Render StoryCard or QuestionCard based on the current card type
//   return (
//     <div className="App">
//       <h1>International Student Game</h1>
      
//       {/* Render based on card type */}
//       {currentCardType === 'story' && currentCard ? (
//         <StoryCard card={currentCard} setCurrentCard={setCurrentCard} setCurrentCardType={setCurrentCardType} />
//       ) : currentCardType === 'question' && currentCard ? (
//         <QuestionCard card={currentCard} setCurrentCard={setCurrentCard} setCurrentCardType={setCurrentCardType} />
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import Prologue from './components/Prologue';
import Question from './components/question';
import GameOver from './components/gameOver';
import StatusBars from './components/statusbar';
import Timer from './components/timer';
import { chapters } from './components/json-data'; // Your JSON data file

const App = () => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [stress, setStress] = useState(0);
  const [money, setMoney] = useState(1000);
  const [gameOver, setGameOver] = useState(false);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    if (chapters[currentChapterIndex]) {
      setCurrentQuestion(chapters[currentChapterIndex].questions[currentQuestionIndex]);
    }
  }, [currentChapterIndex, currentQuestionIndex]);

  // Update stress and money based on answers
  const handleAnswer = (answer) => {
    setStress((prev) => prev + answer.stress);
    setMoney((prev) => prev + answer.money);
    
    if (stress >= 100 || money <= 0) {
      setGameOver(true);
      return;
    }

    // Move to the next question
    const nextQuestionId = answer.next;
    const nextQuestion = chapters[currentChapterIndex].questions.find(q => q.id === nextQuestionId);

    if (nextQuestion) {
      setCurrentQuestion(nextQuestion);
    } else {
      // If no more questions, go to the next chapter
      setCurrentChapterIndex((prev) => prev + 1);
      setCurrentQuestionIndex(0);
    }
  };

  // Restart the game
  const handleRestart = () => {
    setStress(0);
    setMoney(1000);
    setCurrentChapterIndex(0);
    setCurrentQuestionIndex(0);
    setGameOver(false);
  };

  return (
    <div className="game">
      <StatusBars stress={stress} money={money} />
      {gameOver ? (
        <GameOver onRestart={handleRestart} />
      ) : currentQuestion ? (
        <>
          <Timer active={timerActive} question={currentQuestion} onTimeout={handleAnswer} />
          <Question question={currentQuestion} onAnswer={handleAnswer} />
        </>
      ) : (
        <Prologue chapter={chapters[currentChapterIndex]} onStart={() => setCurrentQuestionIndex(0)} />
      )}
    </div>
  );
};

export default App;
