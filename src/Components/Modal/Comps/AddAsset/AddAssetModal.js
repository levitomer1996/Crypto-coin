import React, { useContext, useEffect } from "react";
import AppInputSelect from "../../../AppInputSelect/AppInputSelect";
import useGetCoinsList from "../../../../Hooks/useGetCoinsList";
import { Button, IconButton } from "@material-ui/core";
import useStyles from "../Modal.style";
import AddAssetContext from "./AddAsset.Context";
import CloseIcon from "@material-ui/icons/Close";
import coinList from "./coinList";
import AddAssetTextField from "./Comps/AddAssetTextField";
const AddAssetModal = () => {
  const classes = useStyles();
  // const [coinsList, getCoinsList] = useGetCoinsList();
  const { addAssetState, addInputToModal, removeInputFromModal } =
    useContext(AddAssetContext);
  // useEffect(() => {
  //   getCoinsList();
  // }, []);

  return (
    <div className={classes.add_asset_root}>
      {addAssetState.inputs.map(({ value, id }) => {
        return (
          <div className={classes.add_asset_input_div} key={id}>
            <AddAssetTextField />
            <IconButton onClick={() => removeInputFromModal(id)}>
              <CloseIcon className={classes.add_asset_input_div_close_button} />
            </IconButton>
          </div>
        );
      })}

      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          addInputToModal();
        }}
      >
        Add Another Coin
      </Button>
    </div>
  );
};

export default AddAssetModal;
