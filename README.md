No worries! Here’s a more detailed README file content for your project:

---

# **International Student Accommodation Decision Game**

This repository contains a decision-based web game where players step into the shoes of an international student arriving in a foreign city. The player navigates real-world challenges, making decisions that impact their mental health and finances as they seek accommodation and balance their life.

## **Table of Contents**
- [Features](#features)
- [Game Mechanics](#game-mechanics)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## **Features**
- **Interactive Decision-Making**: Players are presented with various accommodation options and other life decisions that impact their finances and mental health.
- **Dynamic Story Flow**: Based on the player's choices, the storyline progresses, with different branches for various outcomes.
- **Mental Stress and Money Bars**: Visual indicators show how each decision affects the player's well-being and finances.
- **Timer for Anxiety**: Players must make decisions under time pressure, and wrong or delayed choices result in additional stress and complex scenarios.
- **Branching Scenarios**: Each decision (e.g., staying in an Airbnb, with friends, or booking a hotel) has its own consequences, such as financial strain, mental health effects, or potential government penalties for working illegally.

## **Game Mechanics**
1. **Accommodation Choices**: Players begin the game by choosing how to secure temporary housing (e.g., Airbnb, staying with friends, hotel), and each choice influences future scenarios.
2. **Consequences of Decisions**:
   - **Expensive Accommodation**: Leads to high financial strain, forcing the player to work extra hours, which could impact their mental health or lead to legal consequences.
   - **Moderate Accommodation**: A balanced option that requires fewer working hours but might cause moderate stress.
   - **Low-Cost Accommodation**: Allows more time for studies but comes with poor living conditions, affecting mental health.
3. **Timer System**: When the player is asked to make a decision, a timer begins. If the timer runs out, the number of options increases, representing real-life anxiety.

## **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/international-student-game.git
   ```
2. Install dependencies for both the client (React) and server (Node.js):
   ```bash
   cd international-student-game
   npm install
   cd client
   npm install
   ```

3. Set up a `.env` file in the root directory for your MongoDB connection string and any necessary environment variables:
   ```
   MONGO_URI=mongodb://localhost:27017/student-game
   PORT=5000
   ```

4. Run the development server:
   ```bash
   cd ..
   npm run dev
   ```

5. Open your browser at `http://localhost:3000` to view the game.

## **Usage**
- The game starts with the player arriving in a new city.
- They are given multiple-choice options to select their temporary accommodation.
- Each choice leads to consequences, either reducing or increasing mental stress and financial health, with further choices to be made based on previous decisions.


## **Technologies Used**
- **Frontend**: React.js, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (for storing game data and player progress)
- **State Management**: Redux (or Context API)
- **Styling**: CSS
- **Other Tools**: Mongoose (MongoDB ODM), Axios (for API requests)

## **Contributing**
Contributions are welcome! To contribute:
1. Fork this repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## **License**
This project is free source for everyone 

---

