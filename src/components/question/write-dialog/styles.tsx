import { styled } from "@mui/material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  TextField,
  Box,
} from "@mui/material";

import { colors } from "src/theme/colors";

export const StyledDialog = styled(Dialog)({});

export const StyledDialogTitle = styled(DialogTitle)({
  width: "500px",
  borderBottom: "1px solid #e6e6e6",
});

export const StyledDialogContent = styled(DialogContent)({
  marginTop: 24,
});

export const StyledDialogActions = styled(DialogActions)({
  borderTop: "1px solid #e6e6e6",
  padding: 16,
});

export const StyledTypography = styled(Typography)({});

export const TitleText = styled(Typography)({});

export const TitleInput = styled(TextField)({});

export const ContentInput = styled(TextField)({});

export const InputBox = styled(Box)({
  padding: 12,
});

export const CreateButton = styled(Button)({
  backgroundColor: colors.primary,
  "&:hover": {
    backgroundColor: colors.primary,
  },
});
