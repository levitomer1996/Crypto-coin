import React from "react";
import { Paper } from "@material-ui/core";
import useStyles from "./AppPaper.styles";

export default ({ children }) => {
  const classes = useStyles();
  return <Paper className={classes.root}>{children}</Paper>;
};
