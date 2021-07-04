import React, { useContext } from "react";
import useStyles from "./SigninPage.styles";
import AppPaper from "../../Components/AppPaper/AppPaper";
import { Typography } from "@material-ui/core";
import FacebookLoginButton from "../../Components/Facebook/FacebookLoginButton";
import GoogleLoginButton from "../../Components/GoogleLoginButton.js/GoogleLoginButton";
import AuthContext from "../../Context/AuthContex";
import { Redirect } from "react-router-dom";
const SigninPage = () => {
  const classes = useStyles();
  const { authState } = useContext(AuthContext);
  return (
    <div className={classes.root}>
      {authState.isLogged ? <Redirect to="/" /> : null}
      <AppPaper style={{ width: "30%" }}>
        {" "}
        <img
          className={classes.icon_img}
          src="https://www.pikpng.com/pngl/b/30-300631_bitcoin-png-image-free-download-bitcoin-logo-png.png"
        />
        <div className={classes.text_div}>
          <Typography>
            Welcome to Template ! the most friendly and simple place to track
            your coins
          </Typography>
        </div>
        <div>
          <div className={classes.button_div}>
            <FacebookLoginButton />
          </div>
          <div className={classes.button_div}>
            <GoogleLoginButton />
          </div>
        </div>
      </AppPaper>
    </div>
  );
};

export default SigninPage;
