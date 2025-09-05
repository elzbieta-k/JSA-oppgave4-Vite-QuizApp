import { questionContainer } from "./modules/domElements";
import { checkAnswer } from "./modules/checkAnswer";
import { decodeHTML } from "./modules/decodeHTML";

export const showQuestion = (question, currentIndex, score) => {
  questionContainer.replaceChildren();

  const category = document.createElement("h4");
  category.textContent = `CATEGORY: ${question.category}`;
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
