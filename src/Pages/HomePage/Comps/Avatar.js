import React from "react";
import "../HomePage.scss";
import { Avatar } from "@material-ui/core";
export default ({ picture, userName }) => {
  return (
    <div className="avatar_div">
      <Avatar alt={"tomer"} src={picture} />
      <p style={{ color: "white" }}>{userName}</p>
    </div>
  );
};
