import React, { useState, useEffect } from "react";
import {
  TextField,
  makeStyles,
  Button,
  List,
  ListItem,
  ListItemText,
  withStyles,
} from "@material-ui/core";
import coinList from "../coinList";
import findStringInArray from "../../../../../Helpers/findStringInArray";
import "./AddAssetModal.scss";
const useStyles = makeStyles((theme) => ({
  root: { width: "100%", padding: 10, color: "white" },
  textField: { color: "white", width: "100%" },
}));

const AddAssetTextField = (props) => {
  const classes = useStyles();
  const { textfieldStyle } = props;
  const [inputVal, setInputVal] = useState("");
  const [menuItemList, setMenuItemList] = useState(["Tomer", "Yonatan"]);
  const testList = ["Tomer", "Joy", "Yonatan", "Tomas"];
  useEffect(() => {
    setMenuItemList(filterItemsFromArray(coinList, inputVal));
  }, [inputVal]);

  const filterItemsFromArray = (arr, inputValue) => {
    if (inputVal === "") {
      return [];
    } else {
      return arr.filter((str) => str.startsWith(inputValue));
    }
  };

  return (
    <div className={classes.root}>
      <TextField
        id="outlined-basic"
        label="Choose coin"
        style={{ width: "100%" }}
        InputLabelProps={{ style: { color: "white" } }}
        variant="outlined"
        onChange={(e) => setInputVal(e.target.value)}
      />

      <ul>
        {menuItemList.map((i) => {
          return (
            <li>
              <button className="ul_button">
                <p className="button_text">{i}</p>
              </button>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AddAssetTextField;
