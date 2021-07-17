import React, { useState, useEffect, useContext } from "react";
import { TextField, makeStyles } from "@material-ui/core";
import coinList from "../coinList";
import AddAssetContext from "../AddAsset.Context";
import "./AddAssetModal.scss";
import Select from "react-select";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Form,
  Input,
} from "reactstrap";
import classnames from "classnames";

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
  const [singleSelect, setSingleSelect] = useState(null);
  const [multipleSelect, setMultipleSelect] = useState(null);
  const [isListLocked, setIsListLocked] = useState(false);
  const { addAssetToList } = useContext(AddAssetContext);
  useEffect(() => {
    setMenuItemList(filterItemsFromArray(coinList, inputVal));
  }, [inputVal]);

  const filterItemsFromArray = (arr, inputValue) => {
    if (inputVal === "") {
      return [];
    } else {
      return arr.filter((str) => str.value.startsWith(inputValue));
    }
  };

  return (
    // <div className={classes.root}>
    //   <TextField
    //     id="outlined-basic"
    //     label="Choose coin"
    //     style={{ width: "100%" }}
    //     InputLabelProps={{ style: { color: "white" } }}
    //     variant="outlined"
    //     value={inputVal}
    //     onChange={(e) => {
    //       setIsListLocked(false);
    //       setInputVal(e.target.value);
    //     }}
    //   />
    //   {isListLocked ? null : (
    //     <div className="textField_coin_list">
    //       {menuItemList.map((i) => {
    //         return (
    //           <button
    //             className="ul_button"
    //             key={i}
    //             onClick={() => {
    //               setAssetsList({ value: i, id });
    //               setIsListLocked(true);
    //               setInputVal(i);
    //             }}
    //           >
    //             <p className="button_text">{i}</p>
    //           </button>
    //         );
    //       })}
    //     </div>
    //   )}
    // </div>
    <div className="text_field_div">
      <Select
        className="react-select primary text_field"
        classNamePrefix="react-select"
        name="singleSelect"
        styles={{ width: "100%" }}
        value={singleSelect}
        onChange={(value) => setSingleSelect(value)}
        onInputChange={(val) => setInputVal(val)}
        options={menuItemList}
        placeholder="Single Select"
      />
      <div>
        <InputGroup className={classnames("no-border form-control-lg", {})}>
          <Input placeholder="Ammout" type="text" />
        </InputGroup>
      </div>
    </div>
  );
};

export default AddAssetTextField;
