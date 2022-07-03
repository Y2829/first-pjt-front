import type { FC } from "react";
import type { SxProps } from "@mui/material";

import { StyledButton } from "./styles";

interface CommonButtonProps {
  text: string;
  onClick: () => void;
  sx?: SxProps;
}

const CommonButton: FC<CommonButtonProps> = ({ text, onClick, sx }) => {
  return (
    <StyledButton
      variant="contained"
      onClick={onClick}
      sx={{
        ...sx,
      }}
    >
      {text}
    </StyledButton>
  );
};

export default CommonButton;
