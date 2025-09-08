//Getting quesetions from API with a chosen difficulty and type of answers(multiple or true/false)

import axios from "axios";

export const fetchQuestionsFromApi = async (difficulty, type) => {
  try {
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=${type}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
};
