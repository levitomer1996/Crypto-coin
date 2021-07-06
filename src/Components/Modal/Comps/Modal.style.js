import React from "react";
import { makeStyles } from "@material-ui/core/styles";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

export function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  close_btn_container: {
    display: "flex",
    flexDirection: "row",
  },
  cart_container: {
    overflowX: "hidden",
    overflowY: "scroll",
    height: 200,
    maxHeight: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  cart_modal_btn: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: "#1d1d27",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  //Add asset Modal
  add_asset_root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  add_asset_input_div: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  add_asset_input_div_close_button: {
    color: "white",
  },
}));

export default useStyles;
