import React, { useEffect, useState } from 'react';
import { fetchNextCard } from './cardNavigation'; // Import the cardNavigation function
import './questionCard.css' 

const QuestionCard = () => {
  const [questionCard, setQuestionCard] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null); // Track the selected option

  useEffect(() => {
    // Fetch the initial question card when the component mounts
    const fetchInitialQuestionCard = async () => {
      try {
        const initialCard = await fetchNextCard('66f67a425acd51085a335da7', 'question'); // Assuming initial card is a question card
        console.log("Initial Card Fetched: ", initialCard); // Add this log to check the data
        setQuestionCard(initialCard);
      } catch (error) {
        console.error('Error fetching the initial question card:', error);
      }
    };
  
    fetchInitialQuestionCard();
  }, []);
  

  // Function to handle option selection
  const handleOptionClick = async (option) => {
    setSelectedOption(option.text); // Set the selected option for UI feedback

    // Fetch the next card based on the selected option's nextCardId
    if (option.nextCardId) {
      try {
        const nextCard = await fetchNextCard(option.nextCardId, 'question'); // Fetch the next question card
        setQuestionCard(nextCard); // Set the next card to display
        setSelectedOption(null); // Reset the selected option for the new card
      } catch (error) {
        console.error('Error fetching the next card:', error);
      }
    }
  };

  // Conditional rendering while the card data is being fetched
  if (!questionCard) {
    return <div>Loading...</div>;
  }

  return (
    <div className="question-card">
      <h2>{questionCard.question}</h2> {/* Display the question */}
      <div className="options">
        {questionCard.options.map((option, index) => (
          <button 
            key={index} 
            onClick={() => handleOptionClick(option)}
            className={selectedOption === option.text ? 'selected' : ''} // Optionally style the selected option
          >
            {option.text}
          </button>
        ))}
      </div>

      {selectedOption && <p>You selected: {selectedOption}</p>} {/* Display selected option */}
    </div>
  );
};

export default QuestionCard;
