import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "100%",
    borderColor: "white",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  option: {
    backgroundColor: "#d650d5",
    color: "white",
    "&:hover": {
      backgroundColor: "#1d1d27",
    },
  },
}));
export default useStyles;
