import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

import { colors } from "src/theme/colors";
import { NAVBAR_WIDTH } from "src/enums/layout";

export const StyledBox = styled(Box)(() => ({
  width: `${NAVBAR_WIDTH}px`,
  height: "100%",
  position: "fixed",
  top: 0,
  display: "flex",
  flexDirection: "column",
  padding: "16px",
  borderRight: "1px solid #d9d9d9",
  zIndex: 100,
}));

export const Title = styled(Typography)(() => ({
  fontSize: "32px",
  color: "#00b33c",
}));
