import axios from "axios";

import { BASE_URL } from "src/configs";

export const getQuestionList = async () => {
  return await axios.get(`${BASE_URL}/questions/all`);
};
