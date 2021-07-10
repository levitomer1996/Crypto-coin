import React, { useContext } from "react";
import { useGoogleLogin as googleLoginHook } from "react-google-login";
import AuthContext from "../../Context/AuthContex";

export default () => {
  const { Signin_Google, Signout } = useContext(AuthContext);
  const onSuccess = (res) => {
    console.log("Connected to google");
    console.log(res.profileObj);
    Signin_Google(res.profileObj);
  };
  const onFailure = (res) => {
    console.log("not connected to google");
    Signout();
  };
  const { signIn } = googleLoginHook({
    onSuccess,
    onFailure,
    clientId:
      "781800024357-s8jg5vtl14jdptl3v902aaql120gda25.apps.googleusercontent.com",
    isSignedIn: true,
    accessType: "offline",
  });
  return [signIn];
};
