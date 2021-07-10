import React, { useContext } from "react";
import { useGoogleLogout as googleLogoutHook } from "react-google-login";
import AuthContext from "../../Context/AuthContex";

export default () => {
  const { Signin_Google, Signout } = useContext(AuthContext);
  const onLogoutSuccess = (res) => {
    console.log(res);
    Signout();
  };

  const onFailure = (res) => {
    console.log(res);
  };
  const { signOut, loaded } = googleLogoutHook({
    onLogoutSuccess,
    clientId:
      "781800024357-s8jg5vtl14jdptl3v902aaql120gda25.apps.googleusercontent.com",
    accessType: "offline",
  });
  return [signOut];
};
