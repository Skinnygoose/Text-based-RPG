import axios from 'axios';

// Function to fetch the next card based on card ID and type (story or question)
export const fetchNextCard = async (currentCardId, currentCardType) => {
  try {
    const url = currentCardType === 'story'
      ? `http://localhost:5000/api/stories/${currentCardId}`
      : `http://localhost:5000/api/cards/${currentCardId}`;

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching the next card:", error);
    throw error;
  }
};
