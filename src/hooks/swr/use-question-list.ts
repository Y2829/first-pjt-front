import useSWR from "swr";

import { getQuestionList } from "src/apis/question";

const useQuestionList = () => {
  const { data, error } = useSWR("/question/all", (_) => getQuestionList());
  console.log(data);
  return {
    data: data,
  };
};

export default useQuestionList;
