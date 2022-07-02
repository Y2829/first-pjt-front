import { styled } from "@mui/system";
import { Box } from "@mui/material";

import { HEADER_HEIGHT } from "src/enums/layout";

export const StyledBox = styled(Box)(() => ({
  marginTop: `${HEADER_HEIGHT}px`,
  width: "100%",
  height: "100%",
  padding: "0 128px",
}));
