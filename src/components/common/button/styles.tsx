import { styled } from "@mui/system";
import { Button } from "@mui/material";

import { colors } from "src/theme/colors";

export const StyledButton = styled(Button)(() => ({
  backgroundColor: colors.primary,
}));
