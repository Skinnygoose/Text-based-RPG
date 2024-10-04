// import React, { useEffect, useState } from "react";
// import './storyCard.css';
// import StatusBars from './statusbar';
// import { fetchNextCard } from './cardNavigation'; // Import the fetchNextCard function

// const StoryCard = () => {
//   const [storyCard, setStoryCard] = useState(null);
//   const [money, setMoney] = useState(100);
//   const [mentalHealth, setMentalHealth] = useState(100);

//   useEffect(() => {
//     const fetchInitialCard = async () => {
//       const initialCard = await fetchNextCard('66f672f57e60d348a2dec24a', 'story'); //  first card is a story card
//       setStoryCard(initialCard);
//     };

//     fetchInitialCard();
//   }, []);

//   // Function to handle the "Next" button click
//   const handleNext = async () => {
//     if (storyCard && storyCard.nextCardId && storyCard.nextCardType) {
//       const nextCard = await fetchNextCard(storyCard.nextCardId, storyCard.nextCardType);
//       setStoryCard(nextCard);
//     }
//   };

//   if (!storyCard) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="story-card">
//       <h2>{storyCard.title}</h2> {/* Title of the story card */}
//       <p>{storyCard.content}</p> {/* Content of the story card */}
//       <p>Chapter: {storyCard.chapter}</p> {/* Display chapter number */}
//       <StatusBars money={money} mentalHealth={mentalHealth} />
//       <button className="next-button" onClick={handleNext}>Next</button>
//     </div>
//   );
// };

// export default StoryCard;
