import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './questionCard.css'; // Assuming you have a separate CSS file for styling the question card

const QuestionCard = () => {
  const [questionCard, setQuestionCard] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null); // Track the selected option

  useEffect(() => {
    // Fetch the initial question card from the API when the component mounts
    const fetchQuestionCard = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cards'); 
        const cardData = response.data[0]; 
        setQuestionCard(cardData);
      } catch (error) {
        console.error('Error fetching the question card:', error);
      }
    };

    fetchQuestionCard();
  }, []);

  // Function to handle option selection
  const handleOptionClick = async (option) => {
    setSelectedOption(option.text); // Set the selected option for UI feedback

    // Fetch the next card based on the selected option's nextCardId
    if (option.nextCardId) {
      try {
        const response = await axios.get(`http://localhost:5000/api/cards/${option.nextCardId}`);
        const nextCard = response.data;
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
