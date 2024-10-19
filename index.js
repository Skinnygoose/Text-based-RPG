// JSON data to simulate chapters, prologues, and questions
let currentChapterIndex = 0; // Index for the current chapter
let currentChapter = chapters[currentChapterIndex]; // Current chapter object
let currentQuestionIndex = 0; // Index for the current question
let currentQuestion = currentChapter.questions[currentQuestionIndex];

let bars = document.getElementsByClassName("bar");
let stress = 0;
let money = 1000;
let timerInterval;
const timerDuration = 10; // 10 seconds
let remainingTime = timerDuration;

// Stress and Money limits for Game Over
const maxStress = 100;
const minMoney = 0;



// Start the journey
document.getElementById("startJourney").addEventListener("click", function() {
  document.getElementById("monologueSec").style.display = "none";
  document.querySelector(".chapter1").style.display = "block";
  document.querySelector(".chapter1").style.zIndex = 1;
  startPrologue();
});

// Load a chapter and reset relevant variables
function loadChapter(chapterIndex) {
  if (chapterIndex >= 0 && chapterIndex < chapters.length) {
    currentChapterIndex = chapterIndex; // Update the current chapter index
    currentChapter = chapters[currentChapterIndex]; // Get the new chapter object
    currentQuestionIndex = 0; // Reset the question index to the first question
    currentQuestion = currentChapter.questions[currentQuestionIndex]; // Get the first question
  } else {
    console.log("Invalid chapter index");
  }
}

// Display prologue lines
function displayPrologueLines(prologue, callback) {
  for (let i = 0; i < bars.length; i++) {
    bars[i].style.display = "none";
  }
  const prologueContainer = document.getElementById("prologue-container");
  const prologueText = document.getElementById("prologue");
  prologueText.textContent = '';
  let currentLineIndex = 0;

  prologueContainer.style.display = "block"; // Show prologue container
  document.getElementById("nextChapter").style.display = "none"; // Hide the button initially

  const prologueInterval = setInterval(() => {
    if (currentLineIndex < prologue.length) {
      prologueText.textContent = prologue[currentLineIndex] + '\n';
      currentLineIndex++;
    } else {
      clearInterval(prologueInterval);
      if (callback) callback(); // Call the callback function if provided
    }
  }, 3000); // Adjust timing for line display
}

// Start the chapter prologue
function startPrologue() {
  const startPrologueText = currentChapter.startPrologue;
  displayPrologueLines(startPrologueText, loadQuestions); // Show chapter questions after prologue
}

// End the chapter and display the prologue
function endChapter(endPrologueKey) {
  document.getElementById("question-container").style.display = "none"; // Hide questions
  const endPrologueText = currentChapter[endPrologueKey]; // Dynamically pick the correct endPrologue
  displayPrologueLines(endPrologueText, () => {
    document.getElementById("nextChapter").style.display = "block"; // Show next chapter button
  });
}

// Load the next chapter
function loadNextChapter() {
  currentChapterIndex++;
  loadChapter(currentChapterIndex);
  if (currentChapterIndex < chapters.length) {
    loadChapter(currentChapterIndex);
    document.getElementById("prologue-container").style.display = "none"; // Hide prologue container
    document.getElementById("nextChapter").style.display = "none"; // Hide next chapter button
    startPrologue(); // Start the next chapter's prologue
      // Reset stats for new chapter (if desired)
      stress = 0; 
      money = 500; 
      updateStats(stress, money);
  } else {
    console.log("No more chapters available.");
    gameOver(); // If no more chapters, trigger game over or completion screen
  }
}

// Load the questions and display the first one
function loadQuestions() {
  for (let i = 0; i < bars.length; i++) {
    bars[i].style.display = "block";
  }
  document.getElementById("prologue-container").style.display = "none";
  document.getElementById("question-container").style.display = "block";
  displayQuestion(currentQuestion);
}

// Display a question and start the timer after rendering the question
function displayQuestion(question) {
  clearInterval(timerInterval); // Clear any existing timer before starting a new one
  const questionContainer = document.getElementById("question");
  const answersContainer = document.getElementById("answers");
  
  // Set the question text
  questionContainer.textContent = question.question;
  answersContainer.innerHTML = ""; // Clear previous answers

  const shuffledAnswers = shuffleArray([...question.answers]); // Shuffle the answers
  // Render shuffled answers as buttons
  shuffledAnswers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.addEventListener("click", () => handleAnswer(answer)); // Handle answer click
    answersContainer.appendChild(button);
});

  // Start the timer after the question and answers are fully displayed
 // startTimer(question);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Random index
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}
// Handle the selected answer
function handleAnswer(answer) {
  // Update stress and money based on the selected answer
  stress += answer.stress;
  money += answer.money;
  updateStats(stress, money);

  // Check if game over conditions are met
  if (stress >= maxStress || money <= minMoney) {
    gameOver(); // Trigger game over if conditions are met
    return;
  }

  // Move to the next question or end the chapter
  const nextQuestionId = answer.next;
  currentQuestion = currentChapter.questions.find(q => q.id === nextQuestionId);

  if (currentQuestion) {
    displayQuestion(currentQuestion); // Load the next question
  } else {
    endChapter(nextQuestionId); // End the chapter if no more questions
  }
}

// Update progress bars for stress and money
function updateBars(stress, money) {
  const stressHeight = (stress / maxStress) * 100; // Stress bar height
  const moneyHeight = (money / 1000) * 100; // Money bar height

  document.getElementById("stress-bar").style.height = `${stressHeight}%`;
  document.getElementById("money-bar").style.height = `${moneyHeight}%`;
}

// Update stats when the values change
function updateStats(newStress, newMoney) {
  document.getElementById("stress-level").innerText = newStress;
  document.getElementById("money-level").innerText = newMoney;
  updateBars(newStress, newMoney);
}



// Game Over function
function gameOver() {
  clearInterval(timerInterval); // Stop the timer
  document.getElementById("question-container").style.display = "none"; // Hide questions
  document.getElementById("prologue-container").style.display = "none"; // Hide prologue
  document.getElementById("game-over").style.display = "block"; // Show Game Over screen
  document.getElementById("game-over-text").textContent = 
    (stress >= maxStress) ? "Game Over: Your could not handle mental pressure !" : "Game Over: You Ran Out of Money !";
}

// Restart or reset the game (optional)
document.getElementById("restartButton").addEventListener("click", () => {
  stress = 0;
  money = 1000;
  updateStats(stress, money);
  document.getElementById("game-over").style.display = "none";
  loadChapter(0); // Restart from chapter 1
  startPrologue(); // Start the game again
});
