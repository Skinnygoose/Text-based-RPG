import React, { useState, useEffect } from 'react';
import StoryCard from './components/story-card';
import QuestionCard from './components/question-card'; // Import the QuestionCard component
import { fetchNextCard } from './components/cardNavigation'; // Import the navigation logic
import './App.css';


function App() {
  const [currentCard, setCurrentCard] = useState(null); // To store the current card data
  const [currentCardType, setCurrentCardType] = useState(null); // To store the current card type ('story' or 'question')

  useEffect(() => {
    // Fetch the first card when the app loads
    const fetchInitialCard = async () => {
      try {
        const initialCard = await fetchNextCard('66f672f57e60d348a2dec24a', 'story'); // Assuming first card is a story card
        setCurrentCard(initialCard);
        setCurrentCardType('story'); // Set the card type as 'story' initially
      } catch (error) {
        console.error('Error fetching the initial card:', error);
      }
    };

    fetchInitialCard();
  }, []);

  // Render StoryCard or QuestionCard based on the current card type
  return (
    <div className="App">
      <h1>International Student Game</h1>
      
      {/* Render based on card type */}
      {currentCardType === 'story' && currentCard ? (
        <StoryCard card={currentCard} setCurrentCard={setCurrentCard} setCurrentCardType={setCurrentCardType} />
      ) : currentCardType === 'question' && currentCard ? (
        <QuestionCard card={currentCard} setCurrentCard={setCurrentCard} setCurrentCardType={setCurrentCardType} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;

