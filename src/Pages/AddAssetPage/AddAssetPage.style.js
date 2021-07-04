import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
  },
  text_div: { padding: 20 },
  button: {
    background: "linear-gradient(to bottom left, #344675, #263148, #344675)",
    color: "white",
  },
}));

export default useStyles;
