import React, { useState, useEffect } from "react";
import {
  TextField,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  withStyles,
} from "@material-ui/core";
import coinList from "../coinList";
import findStringInArray from "../../../../../Helpers/findStringInArray";

const useStyles = makeStyles((theme) => ({
  root: { width: "100%", padding: 10, color: "white" },
  textField: { color: "white", width: "100%" },
}));

const AddAssetTextField = (props) => {
  const classes = useStyles();
  const { textfieldStyle } = props;
  const [inputVal, setInputVal] = useState("");
  const [menuItemList, setMenuItemList] = useState([]);

  useEffect(async () => {
    setTimeout(() => {
      console.log(findStringInArray(inputVal, coinList));
      setMenuItemList(findStringInArray(inputVal, coinList));
    }, 2000);
  }, [inputVal]);

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
      <div style={{ maxHeight: "40%" }}>
        <List>
          {menuItemList.map((item) => {
            return (
              <ListItem button>
                <ListItemText primary={item} />
              </ListItem>
            );
          })}{" "}
        </List>
      </div>
    </div>
  );
};

export default AddAssetTextField;
