//shows final score after 10 questions

import {
  questionContainer,
  correctOutput,
  incorrectOutput,
} from "./domElements";

export const showFinalScore = (score, questions) => {
  questionContainer.replaceChildren();
  let message = "";
  const finalScoreOutput = document.createElement("h3");
  if (score === 10) {
    message = `🏆 Perfect score! You got ${score}/${questions.length} — you're a true quiz master!`;
  } else if (score >= 8) {
    message = `🔥 Almost perfect! You got ${score}/10 — that's impressive!`;
  } else if (score >= 4) {
    message = `🙂 Not bad! You got ${score}/10 — a little more practice and you'll nail it.`;
  } else {
    message = `😅 Tough round! You scored ${score}/10 — keep trying, you'll get better!`;
  }

  finalScoreOutput.textContent = message;

  const restartButton = document.createElement("button");
  restartButton.classList.add("try-again-button");
  restartButton.textContent = "Try again";

  questionContainer.append(finalScoreOutput, restartButton);
  restartButton.addEventListener("click", () => {
    questionContainer.replaceChildren();
    correctOutput.textContent = `0`;
    incorrectOutput.textContent = `0`;
  });
};
