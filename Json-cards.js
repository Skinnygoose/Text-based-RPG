var chapters = [
  {
    id: "chapter1",
    questions: [
      {
        id: "q1",
        question:
          "Why are you entering Canada, and what exactly are your intentions here?",
        answers: [
          {
            text: "I’m here to study at the University of Toronto and pursue a degree in computer science.",
            next: "q2",
            stress: 0,
            money: 0,
            correct: true,
          },
          {
            text: "I’m visiting as a tourist and plan to explore the city for a few weeks.",
            next: "q_wrong_1",
            stress: 50,
            money: 0,
            correct: false,
          },
          {
            text: "I’m here to visit family members who live in Toronto.",
            next: "q_wrong_1",
            stress: 50,
            money: 0,
            correct: false,
          },
        ],
        // timeout: { next: "q_wrong_1", stress: 50, money: -50 }, // <-- Add this
      },
      {
        id: "q2",
        question:
          "Can you confirm that you have sufficient funds to support yourself for the entire duration of your stay?",
        answers: [
          {
            text: "Yes, I’ve brought the required amount and have additional financial support.",
            next: "q3",
            stress: 0,
            money: 0,
            correct: true,
          },
          {
            text: "I’m not entirely sure, but I have some savings to rely on.",
            next: "q_wrong_2",
            stress: 20,
            money: 0,
            correct: false,
          },
          {
            text: "I may need to find work while I’m here to cover everything.",
            next: "q_wrong_2",
            stress: 20,
            money: 0,
            correct: false,
          },
          {
            text: "Yes, I think so. I have some savings and financial support.",
            next: "q3",
            stress: 20,
            money: 0,
            correct: false,
          },
          {
            text: "I’ll manage somehow, I might need to work part-time if needed.",
            next: "q_wrong_2",
            stress: 20,
            money: 0,
            correct: false,
          },
          {
            text: "I’m pretty sure I have enough, but things could change.",
            next: "q_wrong_2",
            stress: 20,
            money: 0,
            correct: false,
          },
          {
            text: "I have some funds for now, but I’m not sure if they’ll last the whole time.",
            next: "q_wrong_2",
            stress: 20,
            money: 0,
            correct: false,
          },
          {
            text: "I should have enough, but I’ll figure things out if money gets tight.",
            next: "q_wrong_2",
            stress: 20,
            money: 0,
            correct: false,
          },
        ],
        // timeout: { next: "q_wrong_1", stress: 5, money: -50 }, // <-- Add this
      },
      {
        id: "q3",
        question:
          "Show me your official acceptance letter from the university. I’ll need to verify its authenticity.",
        answers: [
          {
            text: "Here’s my acceptance letter. Everything should be in order.",
            next: "endPrologue1",
            stress: 0,
            money: 0,
            correct: true,
          },
          {
            text: "I don’t have it on me right now, but I can get it from my email.",
            next: "q_wrong_3",
            stress: 10,
            money: 0,
            correct: false,
          },
          {
            text: "I’m not sure if I have it with me. Can I send it to you later?",
            next: "q_wrong_3",
            stress: 10,
            money: 0,
            correct: false,
          },
        ],
        timeout: { next: "q_wrong_1", stress: 5, money: -50 }, // <-- Add this
      },
      {
        id: "q_wrong_3",
        question:
          "Show me your official acceptance letter from the university. I’ll need to verify its authenticity.",
        answers: [
          {
            text: "I think I have it somewhere in my bag, just give me a moment.",
            next: "endPrologue1",
            stress: 0,
            money: 0,
            correct: true,
          },
          {
            text: "I’m not sure if it’s here, but I’m confident it’s legitimate.",
            next: "endPrologue1",
            stress: 50,
            money: 0,
            correct: false,
          },
          {
            text: "It’s probably in my email or documents folder. Can i send it to you later.",
            next: "endPrologue1",
            stress: 50,
            money: 0,
            correct: false,
          },
          {
            text: "I thought I packed it, but it might be missing right now.",
            next: "endPrologue1",
            stress: 50,
            money: 0,
            correct: false,
          },
          {
            text: "I had it, but I can’t seem to find it right now. Can we figure it out later?",
            next: "endPrologue1",
            stress: 50,
            money: 0,
            correct: false,
          },
        ],
        timeout: { next: "q_wrong_1", stress: 5, money: -50 }, // <-- Add this
      },
      {
        id: "q_wrong_1",
        question:
          "Why are you entering Canada, and what exactly are your intentions here?",
        answers: [
          {
            text: "I’m studying in Toronto, at the university, but I’m not sure of the program details.",
            next: "q2",
            stress: 50,
            money: 0,
            correct: false,
          },
          {
            text: "I’m entering for school… wait, it’s a study visa, right?",
            next: "q2",
            stress: 5,
            money: 0,
            correct: false,
          },
          {
            text: "I’m here on a student visa to study, I think at the University of Toronto.",
            next: "q2",
            stress: 50,
            money: 0,
            correct: false,
          },
          {
            text: "I’m coming to study, but I don’t know all the specifics just yet.",
            next: "q2",
            stress: 50,
            money: 0,
            correct: false,
          },
          {
            text: "I’m here for university, I guess... the details are in my documents.",
            next: "q2",
            stress: 50,
            money: 0,
            correct: false,
          },
        ],
        timeout: { next: "q_wrong_1", stress: 50, money: -50 }, // <-- Add this
      },
      {
        id: "q_wrong_2",
        question:
          "It seems like you’re not entirely prepared for your stay. Do you have any family members here to help?",
        answers: [
          {
            text: "Yes, I have relatives in Toronto.",
            next: "q3",
            stress: 0,
            money: 0,
            correct: true,
          },
          {
            text: "No, I’ll be handling everything myself.",
            next: "q3",
            stress: 50,
            money: 0,
            correct: false,
          },
        ],
        // timeout: { next: "q_wrong_1", stress: 5, money: -50 }, // <-- Add this
      },
    ],
    startPrologue: [
      "As you took your first step in the city you noticed a long line .",
      "There are some officers who are checking documents..",
      "When you reach at the front of line , you are directed towards a separate room",
      "Inside the room several other students are being questioned , and now its your turn ",
      "answer wisely!",
    ],
    endPrologue1: [
      "Congratulations you have cleared your first challenge ",
      "You are full of excitement at uncertainity at the same time",
      "When you just thought that the challenge is over , now you face another major hurdle",
    ],
  },
  {
    id: "chapter2",
    questions: [
      {
        id: "q1",
        question:
          "You have arrived in the city and need time to find accommodation. What would you do?",
        answers: [
          {
            text: "Go for Airbnb for a week and look for accommodation.",
            next: "q4",
            stress: 0,
            money: -300,
            correct: false,
          },
          {
            text: "Ask your friends to let you crash with them for a week.",
            next: "q6",
            stress: 30,
            money: -100,
            correct: true,
          },
          {
            text: "Book a hotel for a week.",
            next: "q7",
            stress: 0,
            money: -500,
            correct: false,
          },
        ],
        // timeout: { next: "q_wrong_1", stress: 5, money: -50 }, // <-- Add this
      },
      {
        id: "q_wrong_1",
        question:
          "Unfortunately, you cannot go for the college dorm as you do not have the financial capacity. What will you do next?",
        answers: [
          {
            text: "Go back and choose the right decision.",
            next: "q1",
            stress: 0,
            money: 0,
            correct: true,
          },
        ],
        timeout: { next: "q_wrong_1", stress: 5, money: -50 }, // <-- Add this
      },
      {
        id: "q3",
        question:
          "You moved into a shared room, helping you save money, but you're dealing with drama which comes with sharing room with another person",
        answers: [
          {
            text: "It's less expensive , but my your health is slightly affected.",
            next: "q4",
            stress: 5,
            money: -50,
            correct: false,
          },
        ],
        timeout: { next: "q_wrong_1", stress: 5, money: -50 }, // <-- Add this
      },
      {
        id: "q4",
        question:
          "You chose to go for Airbnb. It is moderately expensive, but you have a good experience since it is in the city. After looking for few days you found some options ahead",
        answers: [
          {
            text: "Go for a private room, but it's expensive.",
            next: "q2",
            stress: 0,
            money: -400,
            correct: false,
          },
          {
            text: "Go for a college dorm, which is out of your budget.",
            next: "q_wrong_1",
            stress: 0,
            money: 0,
            correct: false,
          },
          {
            text: "Go for a shared room with another person, which is cost-effective but it has its own challenges.",
            next: "q3",
            stress: -10,
            money: -100,
            correct: true,
          },
        ],
        timeout: { next: "q_wrong_1", stress: 5, money: -50 }, // <-- Add this
      },
      {
        id: "q5",
        question:
          "You chose to stay with your friends, which is free, but now you feel pressured to find somewhere else fast. How does this affect you?",
        answers: [
          {
            text: "Mental health affected as well as money deducted.",
            next: "endPrologue",
            stress: 10,
            money: -100,
            correct: false,
          },
        ],
        timeout: { next: "q_wrong_1", stress: 5, money: -50 }, // <-- Add this
      },
      {
        id: "q6",
        question:
          "You chose to stay at a hotel, which is very expensive, but you're hopeful of finding accommodation. After five days, what do you want to do?",
        answers: [
          {
            text: "Go for a private room, but it's expensive.",
            next: "q7",
            stress: 0,
            money: -300,
            correct: false,
          },
          {
            text: "Go for a college dorm, which is out of your budget.",
            next: "q_wrong_1",
            stress: 0,
            money: 0,
            correct: false,
          },
          {
            text: "Go for a shared room with another person, which is and it comes with its own challenges.",
            next: "endPrologue",
            stress: -5,
            money: -100,
            correct: true,
          },
        ],
        timeout: { next: "q_wrong_1", stress: 5, money: -50 }, // <-- Add this
      },
      {
        id: "q7",
        question:
          "You chose to go for a private room. It will cost you more monthly, but you will have peace and time to yourself.",
        answers: [
          {
            text: "You feel at peace, but your need to spend more now ",
            next: "endPrologue",
            stress: -5,
            money: -300,
            correct: true,
          },
        ],
        timeout: { next: "q_wrong_1", stress: 5, money: -50 }, // <-- Add this
      },
    ],
    startPrologue: [
      "You have arrived at toronto city of opportunities .",
      "As any other person you need to find a roof over your head ",
      "You face plethora of options as you start looking but not every path can be taked in your shoes ",
      "City is full of surprises be carefull.",
    ],
    endPrologue: [
      "Congratulations you have finally achieved a major achievement",
      "You secured a place to live on your own and now you look forward with high hopes",
      "There are more exciting experiences you fill face good luck",
    ],
  },
  {
    id: "chapter3",
    questions: [
      {
        id: "C1",
        question:
          "You have moved in to your new place and now you four days remaining before your orientation on top of that you have pressure to find a part time job ",
        answers: [
          { text: "you wait until orientation since you are excited about college ", 
            next: "-----", 
            stress: 0, 
            money: 0, 
            correct: true },
          {
            text: "you start looking immediately since you have limited money and need cash for next month rent ",
            next: "---",
            stress: 0,
            money: 0,
            correct: true,
          },
         
        ],
      },
      {
        id: "C2",
        question: "you start looking for job you have asked your friends or roommates for advice and two possinle ways lie ahead of you",
        answers: [
          { text: "Apply online ", next: "---", stress: 0, money: 0, correct: true },
          {
            text: "Go out and apply in person",
            next: "-----",
            stress: 0,
            money: 0,
            correct: false,
          },
        ],
      },
      {
        id: "q3",
        question: "This is the final question for chapter 1.",
        answers: [
          {
            text: "Option 1",
            next: "endPrologue1",
            stress: -5,
            money: 0,
            correct: true,
          },
          {
            text: "Option 2",
            next: "q_wrong_3",
            stress: 8,
            money: -50,
            correct: false,
          },
        ],
      },
    ],
    startPrologue: [
      "Its about time you embark on your next challenge ",
      "You have orientation day coming up but",
      "As excited you are you are to face another hard decision probably the hardest uptill now",
      "choose carefully",
    ],
    endPrologue1: [
      "Chapter 1 has concluded.",
      "Get ready for the next challenge.",
    ],
  },
];
