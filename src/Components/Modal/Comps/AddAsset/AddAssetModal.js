import React, { useContext, useEffect } from "react";
import AppInputSelect from "../../../AppInputSelect/AppInputSelect";
import useGetCoinsList from "../../../../Hooks/useGetCoinsList";
import { Button } from "@material-ui/core";
import useStyles from "../Modal.style";
import AddAssetContext from "./AddAsset.Context";
const AddAssetModal = () => {
  const classes = useStyles();
  const [coinsList, getCoinsList] = useGetCoinsList();
  const { addAssetState, addInputToModal } = useContext(AddAssetContext);
  useEffect(() => {
    getCoinsList();
  }, []);

  return (
    <div className={classes.add_asset_root}>
      {addAssetState.inputs.map((i) => {
        return (
          <div style={{ width: "100%" }}>
            <AppInputSelect options={coinsList} />
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
