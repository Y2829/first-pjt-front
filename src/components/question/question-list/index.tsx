import type { FC } from "react";
import { Grid } from "@mui/material";

import { ListItem } from "./styles";

const QuestionList: FC = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        mt: 3,
      }}
    >
      <Grid item xs={6}>
        <ListItem>hello world</ListItem>
      </Grid>
      <Grid item xs={6}>
        <ListItem>hello world</ListItem>
      </Grid>
      <Grid item xs={6}>
        <ListItem>hello world</ListItem>
      </Grid>
      <Grid item xs={6}>
        <ListItem>hello world</ListItem>
      </Grid>
      <Grid item xs={6}>
        <ListItem>hello world</ListItem>
      </Grid>
    </Grid>
  );
};

export default QuestionList;
