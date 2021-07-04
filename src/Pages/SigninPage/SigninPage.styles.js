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
  button_div: {
    paddingBottom: 10,
  },
  icon_img: {
    width: 60,
    height: 61,
  },
}));

export default useStyles;
