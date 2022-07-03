import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

import { colors } from "src/theme/colors";
import { HEADER_HEIGHT } from "src/enums/layout";

export const StyledBox = styled(Box)(() => ({
  width: "100vw",
  height: `${HEADER_HEIGHT}px`,
  position: "fixed",
  top: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: colors.primary,
  zIndex: 100,
}));

export const Title = styled(Typography)(() => ({
  fontSize: "32px",
}));
