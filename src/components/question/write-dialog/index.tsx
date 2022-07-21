import type { FC } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
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
  CloseButton,
} from "./styles";

interface WriteModalProps {
  open: boolean;
  onClickClose: () => void;
}

const WriteDialog: FC<WriteModalProps> = ({ open, onClickClose }) => {
  return (
    <StyledDialog open={open}>
      <StyledDialogTitle>
        <TitleText>질문 등록</TitleText>
        <IconButton onClick={onClickClose}>
          <CloseIcon />
        </IconButton>
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
        <CloseButton variant="outlined" onClick={onClickClose}>
          취소
        </CloseButton>
        <CreateButton variant="contained">등록</CreateButton>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default WriteDialog;
