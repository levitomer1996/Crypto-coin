import React, { useContext, useEffect, useState } from "react";
import AppPaper from "../../Components/AppPaper/AppPaper";
import { Typography } from "@material-ui/core";
import FacebookLoginButton from "../../Components/Facebook/FacebookLoginButton";
import GoogleLoginButton from "../../Components/GoogleLoginButton.js/GoogleLoginButton";
import AuthContext from "../../Context/AuthContex";
import { Redirect } from "react-router-dom";
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
        <div className={"signinpage_root"}>
          <AppPaper>
            {" "}
            <img
              className={"icon_img"}
              src="https://www.pikpng.com/pngl/b/30-300631_bitcoin-png-image-free-download-bitcoin-logo-png.png"
            />
            <div className={"text_div"}>
              <Typography>
                Welcome to Template ! the most friendly and simple place to
                track your coins
              </Typography>
            </div>
            <div>
              <div className={"button_div"}>
                <FacebookLoginButton />
              </div>
              <div className={"button_div"}>
                <GoogleLoginButton />
              </div>
            </div>
          </AppPaper>
        </div>
      )}
    </>
  );
};

export default SigninPage;
