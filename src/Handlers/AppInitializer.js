import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../Context/AuthContex";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Redirect } from "react-router-dom";
import useGoogleLogin from "../Components/GoogleLoginButton.js/useGoogleLogin";
const AppInitializer = ({ children }) => {
  const { Signin_Facebook, Signin_Google, Signout, authState } =
    useContext(AuthContext);
  const [IsIntialized, setIsInitialized] = useState(false);
  //Facebook
  const [is_logged_in_to_facebook, setIsLoggedToFacebook] = useState(false);

  const FacebookInitialize = () => {
    return new Promise((resolve) => {
      //trying to initialize facebook , checks if a user is already signed in.
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: "521522588999462",
          cookie: true,
          xfbml: true,
          version: "v11.0",
        });
        window.FB.AppEvents.logPageView();
        window.FB.getLoginStatus(function (response) {
          if (response.status === "connected") {
            window.FB.api(
              "/me/?fields=id,name,picture&?redirect=false",
              "GET",
              {},
              function (res) {
                console.log("Connected to face");
                setIsLoggedToFacebook(true);
                resolve(Signin_Facebook(res));
              }
            );
          } else if (response.status === "not_authorized") {
            setIsLoggedToFacebook(false);
            console.log("Not Connected to facebook");
            Signout();
            resolve();
          } else {
            console.log("Not Connected to facebook");
            setIsLoggedToFacebook(false);
            Signout();
            resolve();
          }
        });
      };

      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    });
  };

  //Google

  const [signInToGoogle] = useGoogleLogin();
  const [is_logged_in_To_google, setIsLoggedInToGoogle] = useState(false);
  const GoogleInitializer = () => {
    return new Promise((res) => {
      signInToGoogle();
      setIsLoggedInToGoogle(true);
      res();
    });
  };
  const [redirect, setRedirect] = useState(false);
  useEffect(async () => {
    await FacebookInitialize();
    if (!is_logged_in_to_facebook) {
      await GoogleInitializer();
    }
    setIsInitialized(true);
  }, []);

  if (IsIntialized) {
    return (
      <div>
        {authState.isLogged ? <Redirect to="/" /> : null}
        {children}
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "cloumn",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress
          style={{ color: "#d650d5", height: "200px", width: "200px" }}
        />
      </div>
    );
  }
};
export default AppInitializer;
