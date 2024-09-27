import React from 'react';
import StoryCard from './components/story-card';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>International Student Game</h1>
      <StoryCard /> {/* This will display the fetched story card */}
    </div>
  );
}

export default App;
