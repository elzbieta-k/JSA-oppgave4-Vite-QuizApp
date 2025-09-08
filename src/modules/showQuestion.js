//Displaying a question with possible answers and setting addEventListener that call checkAnswer function

import { questionContainer } from "./domElements";
import { checkAnswer } from "./checkAnswer";
import { decodeHTML } from "./decodeHTML";

export const showQuestion = (question, currentIndex, score) => {
  questionContainer.replaceChildren();

  const category = document.createElement("h4");
  category.textContent = `CATEGORY: ${decodeHTML(question.category)}`;
  const questionOutput = document.createElement("h3");
  questionOutput.textContent = decodeHTML(question.question);

  const answersContainer = document.createElement("div");
  answersContainer.classList.add("answers-buttons");
  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.id = `question-${question.id}-answer-${index}`;
    button.classList.add("button");
    button.dataset.answer = answer;
    button.textContent = decodeHTML(answer);

    if (answer === question.correct_answer) {
      button.dataset.correct = "true";
    }
    button.addEventListener("click", () => {
      checkAnswer(question, answer, currentIndex, score, button.id);
    });

    answersContainer.appendChild(button);
  });
  questionContainer.append(category, questionOutput, answersContainer);
};
