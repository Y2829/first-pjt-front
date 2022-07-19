import type { FC } from "react";
import type { SxProps } from "@mui/material";

import { StyledButton } from "./styles";

type VariantType = "contained" | "outlined";

interface CommonButtonProps {
  text: string;
  onClick: () => void;
  variant?: VariantType;
  sx?: SxProps;
}

const CommonButton: FC<CommonButtonProps> = ({
  text,
  onClick,
  variant = "contained",
  sx,
}) => {
  return (
    <StyledButton
      variant={variant}
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
