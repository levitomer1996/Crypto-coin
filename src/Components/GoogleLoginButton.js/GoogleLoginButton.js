import React, { useEffect, useContext } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, Typography } from "@material-ui/core";

import AuthContext from "../../Context/AuthContex";
import useGoogleLogin from "./useGoogleLogin";
import "./GoogleLoginButton.scss";

// const useStyles = makeStyles(() => ({
//   root: {},
//   button_icon: {
//     marginLeft: "5px",
//   },
//   googleIcon: { width: 30, height: 30 },
//   button_text: { color: "#fff", fontWeight: "400", fontSize: "18px" },
// }));

const clientId =
  "781800024357-h33p7pph0tkgatmqed9h6dg3d5b74q0p.apps.googleusercontent.com";

const GoogleLoginButton = () => {
  const { Signin_Google } = useContext(AuthContext);
  // const classes = useStyles();

  const [signIn] = useGoogleLogin();
  return (
    <button className="google_btn" onClick={() => signIn()}>
      <span className="btn_icon">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
      </span>
      <span className="btn_text">התחבר/י באמצעות Google</span>
    </button>

    // <div className="g-signin2" data-onsuccess="onSignIn"></div>
  );
};

export default GoogleLoginButton;
