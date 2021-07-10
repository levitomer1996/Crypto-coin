import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../Context/AuthContex";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Redirect } from "react-router-dom";
const FacebookInitializer = ({ children }) => {
  const { Signin_Facebook, Signout } = useContext(AuthContext);
  const [isInitialized, setIsInitialized] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const Initialize = () => {
    return new Promise((resolve) => {
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
                resolve(Signin_Facebook(res));
              }
            );
          } else if (response.status === "not_authorized") {
            setRedirect(true);
            resolve(Signout);
          } else {
            setRedirect(true);
            resolve(Signout);
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
  useEffect(async () => {
    await Initialize();
    setIsInitialized(true);
  }, []);

  if (isInitialized) {
    return (
      <div>
        {redirect ? <Redirect to="login" /> : null}
        {children}
      </div>
    );
  } else {
    return (
      // <div
      //   style={{
      //     display: "flex",
      //     flexDirection: "cloumn",
      //     alignItems: "center",
      //     justifyContent: "center",
      //   }}
      // >
      //   <CircularProgress
      //     style={{ color: "#d650d5", height: "200px", width: "200px" }}
      //   />

      // </div>
      <>{children}</>
    );
  }
};
export default FacebookInitializer;
