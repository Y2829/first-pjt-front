import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";
export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});
