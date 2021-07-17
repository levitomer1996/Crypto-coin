import React, { useContext, useEffect } from "react";
import { IconButton } from "@material-ui/core";
import { Button } from "reactstrap";
import useStyles from "../Modal.style";
import AddAssetContext from "./AddAsset.Context";
import CloseIcon from "@material-ui/icons/Close";
import AddAssetTextField from "./Comps/AddAssetTextField";
const AddAssetModal = () => {
  const classes = useStyles();
  // const [coinsList, getCoinsList] = useGetCoinsList();
  const { addAssetState, addInputToModal, removeInputFromModal } =
    useContext(AddAssetContext);

  return (
    <div className={classes.add_asset_root}>
      {addAssetState.inputs.map(({ id }) => {
        return (
          <>
            <div className={classes.add_asset_input_div} key={id}>
              <AddAssetTextField key={id} id={id} />
              <IconButton onClick={() => removeInputFromModal(id)}>
                <CloseIcon
                  className={classes.add_asset_input_div_close_button}
                />
              </IconButton>
            </div>
          </>
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
