import { styled } from "@mui/system";
import { Box } from "@mui/system";

import { colors } from "src/theme/colors";
import { HEADER_HEIGHT } from "src/enums/layout";

export const StyledBox = styled(Box)(() => ({
  width: "100vw",
  height: `${HEADER_HEIGHT}px`,
  position: "fixed",
  top: 0,
  backgroundColor: colors.primary,
}));
