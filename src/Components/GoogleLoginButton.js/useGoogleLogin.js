import React, { useContext } from "react";
import { useGoogleLogin } from "react-google-login";
import AuthContext from "../../Context/AuthContex";
export default () => {
  const { Signin_Google } = useContext(AuthContext);
  const clientId =
    "781800024357-h33p7pph0tkgatmqed9h6dg3d5b74q0p.apps.googleusercontent.com";

  const onSuccess = (res) => {
    console.log(res.profileObj);
    Signin_Google(res.profileObj);
  };
  const onFailure = (res) => {
    console.log("Login failed: res:", res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",

    // responseType: 'code',
    // prompt: 'consent',
  });

  const signInToGoogle = () => {
    signIn();
  };
  return [signInToGoogle];
};
