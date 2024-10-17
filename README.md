
# Text-Based RPG Game

Welcome to the **Text-Based RPG Game**, a dynamic, narrative-driven game that allows players to experience the challenges and decisions faced by international students in Canada. This text-based adventure game is built using HTML, CSS, and JavaScript. It features various chapters, choices, and a stress-money management system that reflects the player's journey through the game.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Gameplay](#gameplay)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Demo
You can try out the live version of the game here: [Demo Link](#)

![Game Preview](#)

## Features
- **Narrative-Driven Gameplay**: Players make choices that influence the story's outcome.
- **Stress and Money Management**: Players must maintain a balance between stress and money, or the game ends.
- **Multiple Chapters**: Experience different chapters, each with unique challenges.
- **Dynamic Bars**: Real-time updates of stress and money bars as decisions are made.
- **Customizable Story**: Easily extendable story content with a JSON-based chapter system.
  
## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/text-based-rpg.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd text-based-rpg
   ```

3. **Install dependencies** (if applicable):
   Since this is a basic web game, no external dependencies are required at this stage. Simply run the game on a local server.

4. **Run the game**:
   - If using Visual Studio Code, use the **Live Server** extension to run the game.
   - Alternatively, open `index.html` directly in your browser.

## Gameplay

In this game, players are presented with a series of decisions. Each choice affects two key metrics:
- **Stress**: Represents the mental load on the player. If stress reaches 100, the game ends (displayed in red bar)
- **Money**: Reflects the player's financial status. If money reaches 0, the game ends (displayed in green bar).


The player navigates through various chapters, each with its unique scenarios and questions. Some decisions are critical and may lead to unexpected outcomes.

### How to Play:
1. Start the game by clicking the **"Start Your Journey"** button.
2. Make decisions by selecting one of the available options for each scenario.
3. Monitor your **stress** and **money** bars, as they will change based on your choices.
4. Progress through the story by completing each chapter and advancing to the next.
5. Survive the challenges and make it to the end with a balanced life!

## File Structure

```bash
.
├── index.html          # Main game interface
├── index.js            # Core game logic (functions, event listeners, etc.)
├── Json-cards.js       # Story content (questions, answers, chapters) in JSON format
├── index.css           # Styling for the game interface
├── server.js           # Server logic (optional, if using a backend)
├── user.js             # MongoDB-related functions for handling user data
├── api.js              # API requests to fetch and register users
├── README.md           # This README file
```

## Technologies Used
- **HTML**: For structuring the game interface.
- **CSS**: For styling the game elements.
- **JavaScript**: For game logic and interactivity.
- **MongoDB**: For storing user credentials.
- **Node.js & Express.js**: For backend API handling (optional, if using user registration feature).

## Contributing

We welcome contributions! Please follow the steps below to contribute to the project:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push them to your fork.
4. Submit a pull request, and we'll review your changes.

Please make sure your code follows the project's coding conventions.

## License
This project is open source 



