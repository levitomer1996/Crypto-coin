import React, { useContext, useEffect } from "react";
import { useGoogleLogout } from "react-google-login";
import AuthContext from "../../Context/AuthContex";

export default () => {
  const onLogoutSuccess = (res) => {
    alert("Logged out");
  };
  const { signOut, loaded } = useGoogleLogout({
    onLogoutSuccess,
    clientId:
      "781800024357-h33p7pph0tkgatmqed9h6dg3d5b74q0p.apps.googleusercontent.com",
    accessType: "offline",
  });
  return [signOut];
};
