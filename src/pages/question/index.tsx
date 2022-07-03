import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

import Layout from "src/components/layout";
import QuestionRegisterForm from "src/components/question/register-form";
import QuestionList from "src/components/question/question-list";
import { StyledBox } from "./styles";

const Question: NextPageWithLayout = () => {
  return (
    <StyledBox>
      <QuestionRegisterForm />
      <QuestionList />
    </StyledBox>
  );
};

Question.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Question;
