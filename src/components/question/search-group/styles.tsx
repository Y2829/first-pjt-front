import { styled } from "@mui/system";
import {
  Box,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Button,
} from "@mui/material";

import { colors } from "src/theme/colors";

export const Wrapper = styled(Box)({
  width: "100%",
  display: "flex",
});

export const StyledTextField = styled(TextField)({
  width: "60%",
});

export const StyledSelect = styled(Select)({
  width: "100px",
});

export const StyledInputLabel = styled(InputLabel)({});

export const StyledMenuItem = styled(MenuItem)({});

export const StyledFormControl = styled(FormControl)({});

export const SearchButton = styled(Button)({
  marginLeft: 16,
  color: "#fff",
});
