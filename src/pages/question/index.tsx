import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

import Layout from "src/components/layout";
import SelectCategory from "src/components/question/select-category";
import QuestionList from "src/components/question/question-list";
import { StyledBox } from "./styles";

const Question: NextPageWithLayout = () => {
  return (
    <StyledBox>
      <SelectCategory />
      <QuestionList />
    </StyledBox>
  );
};

Question.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Question;
