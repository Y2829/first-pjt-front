import type { FC } from "react";

import {
  StyledDialog,
  StyledDialogTitle,
  StyledDialogContent,
  StyledDialogActions,
  StyledTypography,
  TitleText,
  TitleInput,
  ContentInput,
  InputBox,
  CreateButton,
} from "./styles";

interface WriteModalProps {
  open: boolean;
}

const WriteDialog: FC<WriteModalProps> = ({ open }) => {
  return (
    <StyledDialog open={open}>
      <StyledDialogTitle>
        <TitleText>질문 등록</TitleText>
      </StyledDialogTitle>
      <StyledDialogContent>
        <InputBox>
          <TitleInput label="제목" fullWidth />
        </InputBox>
        <InputBox>
          <ContentInput label="내용" fullWidth rows={7} multiline />
        </InputBox>
      </StyledDialogContent>
      <StyledDialogActions>
        <CreateButton variant="contained">등록</CreateButton>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default WriteDialog;
