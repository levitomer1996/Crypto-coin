import React, { useContext } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { IconButton, Typography, Button } from "@material-ui/core";
import AppPaper from "../../Components/AppPaper/AppPaper";

import ModalContext from "../../Context/ModalContext";
import "./AddAssetPage.scss";
const AddAssetPage = () => {
  const { setIsModalOpen } = useContext(ModalContext);

  return (
    <div className={"addAssetPageRoot"}>
      <AppPaper>
        <IconButton>
          <AddCircleIcon style={{ width: 70, height: 70, color: "black" }} />
        </IconButton>
        <div className={"text_div"}>
          <Typography style={{ textAlign: "center" }}>
            It looks like you don't have any assets! <br />
            Please add your first asset!
          </Typography>
        </div>
        <div className="button_div">
          <Button
            variant="outlined"
            color="primary"
            className={"addassetpagebutton"}
            style={{ color: "white" }}
            onClick={() => setIsModalOpen("addasset")}
          >
            Add Assets
          </Button>
        </div>
      </AppPaper>
    </div>
  );
};

export default AddAssetPage;
