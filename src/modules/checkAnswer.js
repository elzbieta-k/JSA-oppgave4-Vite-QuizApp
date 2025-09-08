//Checking the answer from the user and set colors to the buttons depending of it is true(green) or false (red)

import {
  correctOutput,
  incorrectOutput,
  questionContainer,
} from "./domElements";
import { showQuestion } from "./showQuestion";
import { showFinalScore } from "./showFinalScore";
import { questionsWithId } from "./setQuestions";

export const checkAnswer = (
  question,
  answer,
  currentIndex,
  score,
  buttonId
) => {
  const correctAnswer = document.createElement("p");
  const answerButton = document.querySelector(`#${buttonId}`);
  const correctAnswerButton = document.querySelector("[data-correct='true'");
  if (answer === question.correct_answer) {
    score++;
    correctOutput.textContent = `${score}`;
    correctAnswer.textContent = `Yes, the correct answer is "${question.correct_answer}"`;
    answerButton.style.backgroundColor = "#61C9A8";
  } else {
    incorrectOutput.textContent = `${currentIndex + 1 - score}`;
    correctAnswer.textContent = `No, the correct answer is "${question.correct_answer}"`;
    answerButton.style.backgroundColor = "#BA3B46";
    correctAnswerButton.style.backgroundColor = "#61C9A8";
  }

  const nextButton = document.createElement("button");
  nextButton.classList.add("next-button");
  nextButton.textContent = "Next";
  questionContainer.append(correctAnswer, nextButton);

  currentIndex++;

  if (currentIndex < questionsWithId.length) {
    nextButton.addEventListener("click", () => {
      showQuestion(questionsWithId[currentIndex], currentIndex, score);
    });
  } else {
    showFinalScore(score, questionsWithId);
  }
};
