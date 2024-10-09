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
        // timeout: { next: "q_wrong_1", stress: 5, money: -50 }, // <-- Add this
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
        // timeout: { next: "q_wrong_1", stress: 5, money: -50 }, // <-- Add this
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
        // timeout: { next: "q_wrong_1", stress: 50, money: -50 }, // <-- Add this
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
        // timeout: { next: "q_wrong_1", stress: 5, money: -50 }, // <-- Add this
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
          {
            text: "you wait until orientation since you are excited about college ",
            next: "C8",
            stress: 10,
            money: 0,
            correct: true,
          },
          {
            text: "you start looking immediately since you have limited money and need cash for next month rent ",
            next: "C2",
            stress: 5,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "C2",
        question:
          "you start looking for job you have asked your friends or roommates for advice and two possinle ways lie ahead of you",
        answers: [
          {
            text: "Apply online ",
            next: "C3",
            stress: 20,
            money: 0,
            correct: true,
          },
          {
            text: "Go out and apply in person",
            next: "C5",
            stress: 10,
            money: 0,
            correct: false,
          },
        ],
      },
      {
        id: "C3",
        question:
          "you apply online but response time is long and you might end up waiting for a month.",
        answers: [
          {
            text: "Next",
            next: "C4",
            stress: 10,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "C4",
        question:
          "you did not get response  and convocation date arrived, you decided to go to attend convocation ",
        answers: [
          {
            text: "Next",
            next: "C8",
            stress: 10,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "C5",
        question:
          "you apply by going to a lot of places and after 3 days you get a interview call from 2 places and got selected both jobs ",
        answers: [
          {
            text: "good pay good hours but start immediately",
            next: "C6",
            stress: 20,
            money: 600,
            correct: true,
          },
          {
            text: "pay is not decent but can start after convocation",
            next: "C7",
            stress: 300,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "C6",
        question:
          "made first sacrifice skip orientation and you feel sad about that but you have a decent paying job which lifts up the pressure of money and you feel secure financially .",
        answers: [
          {
            text: "Next",
            next: "C11",
            stress: 5,
            money: 100,
            correct: true,
          },
        ],
      },
      {
        id: "C7",
        question:
          "you go for less demanded job , less money less social activity , more time to study.",
        answers: [
          {
            text: "Next",
            next: "C12",
            stress: -20,
            money: 300,
            correct: true,
          },
        ],
      },
      {
        id: "C8",
        question:
          "you meet new friends had a good first day but problem of job still remains time is short before next month .",
        answers: [
          {
            text: "Apply online",
            next: "C19",
            stress: -5,
            money: 0,
            correct: true,
          },
          {
            text: "Go out apply in person",
            next: "C9",
            stress: -10,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "C9",
        question: "you decided to go apply in person and found 2 job offers",
        answers: [
          {
            text: "Apply online",
            next: "C11",
            stress: -5,
            money: 0,
            correct: true,
          },
          {
            text: "Go out apply in person",
            next: "C7",
            stress: 10,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "C19",
        question: "you decided to go apply online and found 2 job offers",
        answers: [
          {
            text: "Good pay but more hours  to demanded by work",
            next: "C11",
            stress: -5,
            money: 0,
            correct: true,
          },
          {
            text: "min pay but less demanded job",
            next: "C12",
            stress: 10,
            money: 0,
            correct: true,
          },
        ],
      },

      {
        id: "C11",
        question:
          "you opt for high demanding job and now your job schedule is not exactly what you wanted ",
        answers: [
          {
            text: "work weekends plus compromise 1 class on weekday",
            next: "C12",
            stress: 20,
            money: 0,
            correct: true,
          },
          {
            text: "work all weekdays and skip 3 classes",
            next: "C13",
            stress: 40,
            money: 0,
            correct: true,
          },
          {
            text: "skip 2 classes and work one weekend",
            next: "C14",
            stress: 30,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "C12",
        question:
          "you are performing just about average  in classes grades are above average and you are not worried about money  ",
        answers: [
          {
            text: "Next",
            next: "C16",
            stress: -20,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "C13",
        question:
          "you are not performing good in classes  and if this keeps continue you might face serious academic consequence ",
        answers: [
          {
            text: "Next",
            next: "C20",
            stress: 5,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "C20",
        question:
          "you failed in one course in first semester and you have to retake it which made you more anxious now and costed you money as well ",
        answers: [
          {
            text: "Next",
            next: "C16",
            stress: 10,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "C14",
        question:
          "you are barely passing the courses but you are not concerned from money side and after the semester end you barely made it  ",
        answers: [
          {
            text: "Next",
            next: "C16",
            stress: -10,
            money: 50,
            correct: true,
          },
        ],
      },
      {
        id: "C16",
        question:
          "Winters are here and its time to buy winter clothes and accessory and you are excited for your first snowfall   ",
        answers: [
          {
            text: "Next",
            next: "C15",
            stress: 0,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "C15",
        question:
          "Since Winters are here , you have to buy winter clothes which will costs you quite a bit money but you do not have much of a choice ",
        answers: [
          {
            text: "try to manage with layering up with your own clothes ",
            next: "C17",
            stress: 5,
            money: 0,
            correct: true,
          },
          {
            text: "Buy only jacket   ",
            next: "C18",
            stress: -5,
            money: -200,
            correct: true,
          },
          {
            text: "Buy both jacket and winter shoes  ",
            next: "C26",
            stress: 0,
            money: -500,
            correct: true,
          },
        ],
      },
      {
        id: "C17",
        question:
          "you tried to manage with existing clothes but winters are ruthless here and you fell ill and had to and skip ask for sick leave from job and school for a week  ",
        answers: [
          {
            text: "Next",
            next: "endPrologue1",
            stress: 0,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "C18",
        question:
          "you went for one winter jacket and managed to survive your winters with some struggle as you were afraid of getting sick so you kept outdoor activity to minimum ",
        answers: [
          {
            text: "Next ",
            next: "endPrologue1",
            stress: 0,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "C26",
        question:
          "you bought both winter jacket as well as managed to survive your winters smoothly and enjoyed some winter activities too ",
        answers: [
          {
            text: "Next ",
            next: "endPrologue",
            stress: 0,
            money: 0,
            correct: true,
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
    endPrologue: [
      "Congratulations you have survived winters , and almost near graduation , your winter break of two weeks come up , it will come with few surprises , enjoy you time ahead good luck!",
    ],
  },
  {
    id: "chapter4", // Replace with the chapter number or name
    questions: [
      {
        id: "D1", // Question ID
        question:
          "winters have passed and now you are in early summers , you also have made quite a few friends and as expected fun activities are around the corner , your classmates  are going out and you were invited as well ", // Question text
        answers: [
          {
            text: "Next", // Option text
            next: "D2", // ID of the next question or endPrologue
            stress: 0, // Stress change from selecting this option
            money: 0, // Money change from selecting this option
            correct: true, // Mark if this is the correct option
          },
        ],
      
      },
      {
        id: "D2",
        question:
          "You are ordering food along with your friends and you check out the menu unfortunately you noticed that their meat dishes are not halal but since you are not bound by previous social limitations you have liberty to go other way around ",
        answers: [
          {
            text: "order chicken meal",
            next: "D3", // End of the chapter
            stress: 0,
            money: 0,
            correct: true,
          },
          {
            text: "order a beef platter",
            next: "D3", // Optional: Another wrong answer branch
            stress: 0,
            money: 0,
            correct: false,
          },
          {
            text: "order a vegan course ",
            next: "D4", // Optional: Another wrong answer branch
            stress: 0,
            money: 0,
            correct: false,
          },
        ],
        // timeout: {
        //   next: "q_wrong_2", // Optional: Handle timeout
        //   stress: 10,
        //   money: -50,
        // },
      },
      {
        id: "D3",
        question:
          "You thought about going for it but ultimately you refrained from it since you were ",
        answers: [
          {
            text: "Next",
            next: "D5", // Return to correct path
            stress: 0,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "D4",
        question:
          "you pretended to be vegan and your friends teased you made  a little fun of you but you just played along and laughed it off",
        answers: [
          {
            text: "Next",
            next: "D5", // Return to correct path
            stress: 0,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "D5",
        question:
          "While having dinner one of your friend revealed its his birthday so  called out a waiter and he ordered beers for everyone from his side and you are being offered one too",
        answers: [
          {
            text: "accept the beer and drink to socialize",
            next: "D6", // Return to correct path
            stress: 0,
            money: 0,
            correct: true,
          },
          {
            text: "decline politely",
            next: "D7", // Return to correct path
            stress: 0,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "D6",
        question:
          "To not offend your newly made friends you could not decline and gave in too peer pressure and drank beer for the first time and now you feel super guilty",
        answers: [
          {
            text: "accept the beer and drink to socialize",
            next: "D10", // Return to correct path
            stress: 0,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "D7",
        question:
          "you tried to decline peacefully but situation became a bit weird since you are only person not drinking that, what would you like to do ",
        answers: [
          {
            text: "explain to your friends your actual reason ",
            next: "D8", // Return to correct path
            stress: 0,
            money: 0,
            correct: true,
          },
          {
            text: "tell them you have medical condition (lie) ",
            next: "D9", // Return to correct path
            stress: 0,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "D8",
        question:
          "your friends respected your decision and one of your friends got it exchanged from a non alcoholic drink but you felt a slightly change in some of your friends attitude and looks like you felt somewhat left out  ",
        answers: [
          {
            text: "Next ",
            next: "D10", // Return to correct path
            stress: 0,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "D9",
        question:
          "your friend who ordered apologized and got it exchanged but you felt guilty for lying since now you will have to rely on it and going back on your word might make you look like a liar   ",
        answers: [
          {
            text: "Next ",
            next: "D10", // Return to correct path
            stress: 0,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "D10",
        question:
          "you had a good time overall and went back to home after that   ",
        answers: [
          {
            text: "Next ",
            next: "D11", // Return to correct path
            stress: 0,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "D11",
        question:
          "Few weeks passed and you are scrolling through your phone and you realized Eid is coming soon you are somewhat excited as well you feel isolated and homesick  ",
        answers: [
          {
            text: "Next ",
            next: "D12", // Return to correct path
            stress: 0,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "D12",
        question:
          "You have to plan ahead , what you want to do you have mixed feelings ,as much as you want to celebrate being alone comes with its challenges   ",
        answers: [
          {
            text: "Next ",
            next: "D13", // Return to correct path
            stress: 0,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "D13",
        question:
          "Eid is coming up tomorrow , you have class on same morning as well your work in the evening  ",
        answers: [
          {
            text: "take off from work on that day ",
            next: "D14", // Return to correct path
            stress: 0,
            money: 0,
            correct: true,
          },
          {
            text: "Go to work on that day  ",
            next: "D20", // Return to correct path
            stress: 0,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "D14",
        question:
          "You took off from work as you want have feeling of celebration , you attended class but you feel out of place since no one share your joy and feelings  ",
        answers: [
          {
            text: "Next ",
            next: "D15", // Return to correct path
            stress: 0,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "D15",
        question:
          "To handle the loneliness you thought about several options to cope up  ",
        answers: [
          {
            text: "call home and talk to family  ",
            next: "D18", // Return to correct path
            stress: 0,
            money: 0,
            correct: true,
          },
          {
            text: "Go to nearest mosque and try to meet up within your community ",
            next: "D16", // Return to correct path
            stress: 0,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "D16",
        question:
          "You went to nearest mosque and found a sense of belonging since everyone around you was hugging and greeting but more or less they are mostly strangers and you turned out to miss your family relatives more  ",
        answers: [
          {
            text: "Next ",
            next: "D19", // Return to correct path
            stress: 0,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "D18",
        question:
          "You FaceTime your family and that helped you somewhat felt like at home and reduce the feeling of loneliness , but as soon the call was you still felt somewhat empty, but hey its better than nothing ",
        answers: [
          {
            text: "Next ",
            next: "D19", // Return to correct path
            stress: 0,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "D19",
        question:
          "although the day was passed as usual you still wanted to fulfill the feeling ,so you after work you went to downtown to but yourself something as a token of celebration  ",
        answers: [
          {
            text: "Next ",
            next: "D21", // Return to correct path
            stress: 0,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "D20",
        question:
          "You thought of keeping yourself busy and decide to go to work , and your day passed as usual ,business kept you away form negative thoughts and day passed as usual ",
        answers: [
          {
            text: "Next ",
            next: "D19", // Return to correct path
            stress: 0,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "D21",
        question: "You arrived at downtown market ",
        answers: [
          {
            text: "treat yourself with nice dinner  ",
            next: "D23", // Return to correct path
            stress: 0,
            money: 0,
            correct: true,
          },
          {
            text: "but yourself nice shoes   ",
            next: "D22", // Return to correct path
            stress: 0,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "D22",
        question:
          "You bought yourself a nice gift and it gave you a superficial happiness and you celebrated in your own way ",
        answers: [
          {
            text: "Next ",
            next: "D23", // Return to correct path
            stress: 0,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "D23",
        question:
          "YYou bought yourself a nice dinner , but even the fancy food do not give you much joy when you are alone nevertheless you had celebrated in your own way ",
        answers: [
          {
            text: "Next ",
            next: "D24", // Return to correct path
            stress: 0,
            money: 0,
            correct: true,
          },
        ],
      },
      {
        id: "D24",
        question:
          "Semester break was a roller coaster of emotions for you , had its ups and downs and not long after that your results came and you passed the course although not quite excellent result but for you its no less joyful as anyone because in the end we all face our battles alone and yours has been quite hard but you persisted  ",
        answers: [
          {
            text: "Next ",
            next: "endPrologue", // Return to correct path
            stress: 0,
            money: 0,
            correct: true,
          },
        ],
      },
    ],
    startPrologue: [
      "Semester break finally came and you its time for you to live a little , life is unpredictable let us see what it has for you this time  ",
    ],
    endPrologue: [
      "You have come to the end of your journey as a student , you survived and stayed strong and that gave you something someone cannot obtain but through hardships and struggles which is strength",
      "Thank you for playing , as an international student and  developer of this game i would like to end this with one lesson i personally learnt through the my favourite quote",
      "If at first you don’t succeed, just take a longer coffee break and try again",
    ],
  },
];
