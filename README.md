# Mind Master Quiz

Mind Master Quiz is a web-based quiz application built with Vite, vanilla JavaScript, and modern CSS. Users can select quiz difficulty and question type, answer 10 questions fetched from the Open Trivia Database API, and see their score at the end.
<img width="1920" height="868" alt="mindMasterQuiz" src="https://github.com/user-attachments/assets/1f3210e0-2da6-41cb-9045-4aec27d5d150" />

## Features

- Choose difficulty: Easy, Medium, or Hard
- Choose question type: Multiple Choice or True/False
- Randomized answer order for each question
- Instant feedback on correct/incorrect answers
- Score tracking and final results with motivational messages
- Option to restart the quiz

## Project Structure

```
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── vite.svg
└── src/
    ├── main.js
    ├── style.css
    └── modules/
        ├── checkAnswer.js
        ├── decodeHTML.js
        ├── domElements.js
        ├── fetchQuestionsFromApi.js
        ├── setQuestions.js
        ├── showFinalScore.js
        ├── showQuestion.js
        └── startQuiz.js
```

## Getting Started
Clicking the GitHub pages link automatically starts up the project.

## Credits

- [Open Trivia Database](https://opentdb.com/) for quiz questions
- Built with [Vite](https://vitejs.dev/)

## License

This project is for educational purposes.
