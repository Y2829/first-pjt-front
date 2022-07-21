import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import { useState, useEffect } from "react";

import Layout from "src/components/layout";
import CategorySelect from "src/components/question/category-select";
import QuestionList from "src/components/question/question-list";
import SearchGroup from "src/components/question/search-group";
import CreateButton from "src/components/question/create-button";
import WriteDialog from "src/components/question/write-dialog";
import useQuestionList from "src/hooks/swr/use-question-list";
import { StyledBox, Wrapper } from "./styles";

import { getQuestionList } from "src/apis/question";

const Question: NextPageWithLayout = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const { data } = useQuestionList();

  const handleClickCreateQuestion = () => {
    setOpenModal(true);
  };

  const handleClickCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    getQuestionList()
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  });
  return (
    <StyledBox>
      <SearchGroup />
      <Wrapper>
        <CategorySelect />
        <CreateButton onClick={handleClickCreateQuestion} />
      </Wrapper>
      <QuestionList />
      <WriteDialog open={openModal} onClickClose={handleClickCloseModal} />
    </StyledBox>
  );
};

Question.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Question;
