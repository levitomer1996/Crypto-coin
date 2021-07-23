import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContex";
import { Redirect } from "react-router-dom";
import { Typography } from "@material-ui/core";

import AppPaper from "../../Components/AppPaper/AppPaper";
import FacebookLoginButton from "../../Components/Facebook/FacebookLoginButton";
import GoogleLoginButton from "../../Components/GoogleLoginButton.js/GoogleLoginButton";
import CCLogin from "../../Components/CCLogin/CCLogin";

import "./SigninPage.scss";

const SigninPage = () => {
  const { authState } = useContext(AuthContext);
  // console.log(checkIfLoggedIn(authState.isLogged));
  const [redirect, setRedirect] = useState(false);
  const checkIfLoggedIn = (isLogged) => {
    return new Promise((res, rej) => {
      if (isLogged) {
        //User is logged in -> Redirect
        res(setRedirect(true));
      } else {
        //User is not Logged in Render the page.
        rej(setRedirect(false));
      }
    });
  };
  useEffect(async () => {
    await checkIfLoggedIn(authState.isLogged);
  }, []);

  return (
    <>
      {redirect ? (
        <Redirect to="/" />
      ) : (
        <div className="signinpage_root">
          <AppPaper>
            <img src="https://www.pikpng.com/pngl/b/30-300631_bitcoin-png-image-free-download-bitcoin-logo-png.png" />
            <div className="text_div">
              ברוכים הבאים ל - <strong>Crypto Casle</strong>. <br />
              המקום הידידותי והנוח ביותר לניהול מעקב אחר ההשקעות שלך במטבעות
              קריפטו.
            </div>
            <div className="btn_wrapper">
              <CCLogin />
              <GoogleLoginButton />
              <FacebookLoginButton />
            </div>
          </AppPaper>
          <div className="not_registered">
            <button className="register_btn my-3">
              <span>עדיין אין לך משתמש?</span>
              <Link className="register_link" to="/register">
                הירשם עכשיו
              </Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SigninPage;
