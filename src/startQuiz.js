import { showQuestion } from "./showQuestion";
import { correctOutput, incorrectOutput } from "./domElements";
export const startQuiz = (questions) => {
  let currentIndexForQuestion = 0;
  let score = 0;
  correctOutput.textContent = "0";
  incorrectOutput.textContent = "0";
  showQuestion(
    questions[currentIndexForQuestion],
    currentIndexForQuestion,
    score
  );
};
