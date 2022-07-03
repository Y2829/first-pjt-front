import type { FC } from "react";
import { InputAdornment } from "@mui/material";

import { StyledBox, StyledTextField } from "./styles";
import CommonButton from "src/components/common/button";

const QuestionRegisterForm: FC = () => {
  return (
    <StyledBox>
      <StyledTextField
        multiline
        rows={5}
        placeholder="멘토들에게 질문을 남겨주세요."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <CommonButton
                text={"등록"}
                onClick={() => null}
                sx={{
                  height: "80px",
                }}
              />
            </InputAdornment>
          ),
        }}
      />
    </StyledBox>
  );
};

export default QuestionRegisterForm;
