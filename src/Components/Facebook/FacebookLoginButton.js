import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, Typography } from "@material-ui/core";
import "./FacebookLoginButton.scss";

// const useStyles = makeStyles(() => ({
//   root: {
//     color: "#343a40",
//     width: "100%",
//     fontSize: "1rem",
//     fontWeight: "400",
//     border: " 1px solid #344675",
//     "&:hover": {
//       background: "linear-gradient(to bottom left, #344675, #263148, #344675)",
//       color: "white",
//     },
//   },
//   facebookIcon: { width: 30, height: 30 },
// }));

const FacebookLoginButton = () => {
  // const classes = useStyles();
  const handleLogin = () => {
    window.FB.login(
      function (response) {
        console.log(response);
      },
      { scope: "email,user_likes", return_scopes: true }
    );
  };
  return (
    <button className="facebook_btn">
      <span className="btn_icon">
        <img src="https://image.flaticon.com/icons/png/512/733/733547.png" />
      </span>
      <span className="btn_text">התחבר/י באמצעות Facebook</span>
    </button>
    // <Button
    //   variant="outlined"
    //   className={classes.root}
    //   onClick={() => handleLogin()}
    // >
    //   <span className="button_icon">
    //     <img
    //       src="https://image.flaticon.com/icons/png/512/733/733547.png"
    //       className={classes.facebookIcon}
    //     />
    //   </span>
    //   <span className="button_text">התחבר/י באמצעות Facebook</span>
    // </Button>
  );
};

export default FacebookLoginButton;
