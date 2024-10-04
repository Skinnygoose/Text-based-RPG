var chapters = [
  {
    "id": "chapter1",
    "questions": [
      {
        "id": "q1",
        "question": "Why are you entering Canada, and what exactly are your intentions here?",
        "answers": [
          {"text": "I’m here to study at the University of Toronto and pursue a degree in computer science.", "next": "q2", "stress": -5, "money": 0, "correct": true},
          {"text": "I’m visiting as a tourist and plan to explore the city for a few weeks.", "next": "q_wrong_1", "stress": 10, "money": -200, "correct": false},
          {"text": "I’m here to visit family members who live in Toronto.", "next": "q_wrong_1", "stress": 8, "money": -150, "correct": false}
        ],
        "timeout": { "next": "q_wrong_1", "stress": 50, "money": -50 }  // <-- Add this
      },
      {
        "id": "q2",
        "question": "Can you confirm that you have sufficient funds to support yourself for the entire duration of your stay?",
        "answers": [
          {"text": "Yes, I’ve brought the required amount and have additional financial support.", "next": "q3", "stress": -3, "money": 0, "correct": true},
          {"text": "I’m not entirely sure, but I have some savings to rely on.", "next": "q_wrong_2", "stress": 5, "money": -50, "correct": false},
          {"text": "I may need to find work while I’m here to cover everything.", "next": "q_wrong_2", "stress": 10, "money": -100, "correct": false},
          {"text": "Yes, I think so. I have some savings and financial support.", "next": "q3", "stress": -4, "money": 0, "correct": true},
          {"text": "I’ll manage somehow, I might need to work part-time if needed.", "next": "q_wrong_2", "stress": 8, "money": -100, "correct": false},
          {"text": "I’m pretty sure I have enough, but things could change.", "next": "q_wrong_2", "stress": 6, "money": -75, "correct": false},
          {"text": "I have some funds for now, but I’m not sure if they’ll last the whole time.", "next": "q_wrong_2", "stress": 7, "money": -80, "correct": false},
          {"text": "I should have enough, but I’ll figure things out if money gets tight.", "next": "q_wrong_2", "stress": 5, "money": -50, "correct": false}
        ],
        "timeout": { "next": "q_wrong_1", "stress": 5, "money": -50 }  // <-- Add this
      },
      {
        "id": "q3",
        "question": "Show me your official acceptance letter from the university. I’ll need to verify its authenticity.",
        "answers": [
          {"text": "Here’s my acceptance letter. Everything should be in order.", "next": "endPrologue1", "stress": -5, "money": 0, "correct": true},
          {"text": "I don’t have it on me right now, but I can get it from my email.", "next": "q_wrong_3", "stress": 8, "money": -50, "correct": false},
          {"text": "I’m not sure if I have it with me. Can I send it to you later?", "next": "q_wrong_3", "stress": 10, "money": -100, "correct": false}
        ],
        "timeout": { "next": "q_wrong_1", "stress": 5, "money": -50 }  // <-- Add this
      },
      {
        "id": "q_wrong_3",
        "question": "Show me your official acceptance letter from the university. I’ll need to verify its authenticity.",
        "answers": [
          {"text": "I think I have it somewhere in my bag, just give me a moment.", "next": "endPrologue1", "stress": -3, "money": 0, "correct": true},
          {"text": "I’m not sure if it’s here, but I’m confident it’s legitimate.", "next": "endPrologue1", "stress": 5, "money": -50, "correct": false},
          {"text": "It’s probably in my email or documents folder. Let me check later.", "next": "endPrologue1", "stress": 7, "money": -75, "correct": false},
          {"text": "I thought I packed it, but it might be missing right now.", "next": "endPrologue1", "stress": 10, "money": -100, "correct": false},
          {"text": "I had it, but I can’t seem to find it right now. Can we figure it out later?", "next": "endPrologue1", "stress": 8, "money": -80, "correct": false}
        ],
        "timeout": { "next": "q_wrong_1", "stress": 5, "money": -50 }  // <-- Add this
      },
      {
        "id": "q_wrong_1",
        "question": "Why are you entering Canada, and what exactly are your intentions here?",
        "answers": [
          {"text": "I’m studying in Toronto, at the university, but I’m not sure of the program details.", "next": "q2", "stress": 8, "money": -100, "correct": false},
          {"text": "I’m entering for school… wait, it’s a study visa, right?", "next": "q2", "stress": 5, "money": -50, "correct": false},
          {"text": "I’m here on a student visa to study, I think at the University of Toronto.", "next": "q2", "stress": 7, "money": -75, "correct": false},
          {"text": "I’m coming to study, but I don’t know all the specifics just yet.", "next": "q2", "stress": 10, "money": -100, "correct": false},
          {"text": "I’m here for university, I guess... the details are in my documents.", "next": "q2", "stress": 6, "money": -80, "correct": false}
        ],
        "timeout": { "next": "q_wrong_1", "stress": 50, "money": -50 }  // <-- Add this
      },
      {
        "id": "q_wrong_2",
        "question": "It seems like you’re not entirely prepared for your stay. Do you have any family members here to help?",
        "answers": [
          {"text": "Yes, I have relatives in Toronto.", "next": "q3", "stress": -5, "money": 50, "correct": true},
          {"text": "No, I’ll be handling everything myself.", "next": "q3", "stress": 10, "money": -100, "correct": false}
        ],
        "timeout": { "next": "q_wrong_1", "stress": 5, "money": -50 }  // <-- Add this
      }
    ],
    "startPrologue": [
      "Welcome to the first step of your journey.",
      "Each decision you make will shape your path.",
      "Choose wisely, and let's begin."
    ],
    "endPrologue1": [
      "The journey has only just begun.",
      "You've answered the questions, but more challenges await.",
      "Prepare yourself for the next step."
    ]
  },
  {
    "id": "chapter2",
    "questions": [
      {
        "id": "q1",
        "question": "You have arrived in the city and need time to find accommodation. What would you do?",
        "answers": [
          {"text": "Go for Airbnb for a week and look for accommodation.", "next": "q4", "stress": 0, "money": -200, "correct": false},
          {"text": "Ask your friends to let you crash with them for a week.", "next": "q6", "stress": 0, "money": 0, "correct": true},
          {"text": "Book a hotel for a week.", "next": "q7", "stress": 0, "money": -500, "correct": false}
        ],
        "timeout": { "next": "q_wrong_1", "stress": 5, "money": -50 }  // <-- Add this
      },
      {
        "id": "q_wrong_1",
        "question": "Unfortunately, you cannot go for the college dorm as you do not have the financial capacity. What will you do next?",
        "answers": [
          {"text": "Go back and choose the right decision.", "next": "q1", "stress": 0, "money": 0, "correct": true}
        ],
        "timeout": { "next": "q_wrong_1", "stress": 5, "money": -50 }  // <-- Add this
      },
      {
        "id": "q3",
        "question": "You moved into a shared room, helping you save money, but you're dealing with drama from other people. How do you feel?",
        "answers": [
          {"text": "It's less money deducted, but my mental health is affected.", "next": "q4", "stress": 5, "money": -50, "correct": false}
        ],
        "timeout": { "next": "q_wrong_1", "stress": 5, "money": -50 }  // <-- Add this
      },
      {
        "id": "q4",
        "question": "You chose to go for Airbnb. It is moderately expensive, but you have a good experience since it is in the city. What would you like to do?",
        "answers": [
          {"text": "Go for a private room, but it's expensive.", "next": "q2", "stress": 0, "money": -300, "correct": false},
          {"text": "Go for a college dorm, which is out of your budget.", "next": "q_wrong_1", "stress": 0, "money": 0, "correct": false},
          {"text": "Go for a shared room with another person, which is cost-effective but more stressful.", "next": "q3", "stress": -5, "money": -100, "correct": true}
        ],
        "timeout": { "next": "q_wrong_1", "stress": 5, "money": -50 }  // <-- Add this
      },
      {
        "id": "q5",
        "question": "You chose to stay with your friends, which is free, but now you feel pressured to find somewhere else fast. How does this affect you?",
        "answers": [
          {"text": "Mental health affected as well as money deducted.", "next": "endPrologue", "stress": 10, "money": -100, "correct": false}
        ],
        "timeout": { "next": "q_wrong_1", "stress": 5, "money": -50 }  // <-- Add this
      },
      {
        "id": "q6",
        "question": "You chose to stay at a hotel, which is very expensive, but you're hopeful of finding accommodation. After five days, what do you want to do?",
        "answers": [
          {"text": "Go for a private room, but it's expensive.", "next": "q7", "stress": 0, "money": -300, "correct": false},
          {"text": "Go for a college dorm, which is out of your budget.", "next": "q_wrong_1", "stress": 0, "money": 0, "correct": false},
          {"text": "Go for a shared room with another person, which is cost-effective but more stressful.", "next": "endPrologue", "stress": -5, "money": -100, "correct": true}
        ],
        "timeout": { "next": "q_wrong_1", "stress": 5, "money": -50 }  // <-- Add this
      },
      {
        "id": "q7",
        "question": "You chose to go for a private room. It will cost you more monthly, but you will have peace and time to yourself. How do you feel?",
        "answers": [
          {"text": "Mental health stable, but more money deducted.", "next": "endPrologue", "stress": -5, "money": -300, "correct": true}
        ],
        "timeout": { "next": "q_wrong_1", "stress": 5, "money": -50 }  // <-- Add this
      }
    ],
    "startPrologue": [
      "Welcome to the next chapter of your journey.",
      "Your decisions will continue to shape your experience.",
      "Choose wisely as we move forward."
    ],
    "endPrologue": [
      "You've navigated your options successfully.",
      "Challenges lie ahead, but you're making progress.",
      "Prepare for the next decisions that await."
    ]
  }
];
