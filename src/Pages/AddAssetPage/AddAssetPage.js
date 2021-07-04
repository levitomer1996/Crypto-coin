import React, { useContext } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { IconButton, Typography, Button } from "@material-ui/core";
import AppPaper from "../../Components/AppPaper/AppPaper";
import useStyles from "./AddAssetPage.style";
import ModalContext from "../../Context/ModalContext";
const AddAssetPage = () => {
  const { setIsModalOpen } = useContext(ModalContext);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppPaper>
        <IconButton>
          <AddCircleIcon style={{ width: 70, height: 70, color: "black" }} />
        </IconButton>
        <div className={classes.text_div}>
          <Typography style={{ textAlign: "center" }}>
            It looks like you don't have any assets! <br />
            Please add your first asset!
          </Typography>
        </div>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={() => setIsModalOpen("addasset")}
        >
          Add Assets
        </Button>
      </AppPaper>
    </div>
  );
};

export default AddAssetPage;
