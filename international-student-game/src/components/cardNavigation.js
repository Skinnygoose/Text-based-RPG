// import axios from 'axios'; 

// // Function to fetch the next card based on card ID and type (story or question)
// export const fetchNextCard = async (currentCardId, currentCardType) => {
//   try {
//     let url;
//     if (currentCardType === 'story') {
//       url = `http://localhost:5000/api/stories/${currentCardId}`;
//     } else if (currentCardType === 'question') {
//       url = `http://localhost:5000/api/cards/${currentCardId}`;
//     } else {
//       throw new Error('Invalid card type');
//     }

//     const response = await axios.get(url);
//     console.log('Fetched card data:', response.data); // Log response for debugging
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching the next card:", error);
//     throw error;
//   }
// };
