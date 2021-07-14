import React, { useState, useEffect, useContext } from "react";
import { TextField, makeStyles } from "@material-ui/core";
import coinList from "../coinList";
import AddAssetContext from "../AddAsset.Context";
import "./AddAssetModal.scss";

const useStyles = makeStyles((theme) => ({
  root: { width: "100%", padding: 10, color: "white" },
  textField: { color: "white", width: "100%" },
}));

const AddAssetTextField = ({ id }) => {
  const classes = useStyles();
  const [inputVal, setInputVal] = useState("");
  const [menuItemList, setMenuItemList] = useState([]);
  const [assetsList, setAssetsList] = useState([]);
  //Locks the list of founded coins
  const [isListLocked, setIsListLocked] = useState(false);
  const { addAssetToList } = useContext(AddAssetContext);
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
        value={inputVal}
        onChange={(e) => {
          setIsListLocked(false);
          setInputVal(e.target.value);
        }}
      />
      {isListLocked ? null : (
        <div className="textField_coin_list">
          {menuItemList.map((i) => {
            return (
              <button
                className="ul_button"
                key={i}
                onClick={() => {
                  setAssetsList({ value: i, id });
                  setIsListLocked(true);
                  setInputVal(i);
                }}
              >
                <p className="button_text">{i}</p>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AddAssetTextField;
