import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

import Layout from "src/components/layout";
import QuestionRegisterForm from "src/components/question/register-form";
import { StyledBox } from "./styles";

const Question: NextPageWithLayout = () => {
  return (
    <StyledBox>
      <QuestionRegisterForm />
    </StyledBox>
  );
};

Question.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Question;
