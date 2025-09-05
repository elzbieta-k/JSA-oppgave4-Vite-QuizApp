import "./style.css";
import { setValuesForm } from "./domElements";
import { fetchQuestionsFromApi } from "./fetchQuestionsFromApi";
import { v4 as uuidv4 } from "uuid";
import { startQuiz } from "./startQuiz";
import { setQuestions } from "./setQuestions";

setValuesForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(setValuesForm);

  const difficulty = formData.get("difficulty-level");
  const type = formData.get("type");

  const questions = await fetchQuestionsFromApi(difficulty, type);

  const questionsWithId = questions.map((question) => ({
    ...question,
    id: uuidv4(),
    answers: [...question.incorrect_answers, question.correct_answer].sort(
      () => Math.random() - 0.5
    ),
  }));
  setQuestions(questionsWithId);
  console.log(questionsWithId);
  startQuiz(questionsWithId);
});
