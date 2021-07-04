import React, { useReducer } from "react";

var types = { FACEBOOK: "FACEBOOK", GOOGLE: "GOOGLE" };
var { FACEBOOK, GOOGLE } = types;
const AuthContext = React.createContext();
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "signin_facebook":
      return { isLogged: true, user: action.payload, type: FACEBOOK };
    case "signin_google":
      return { isLogged: true, user: action.payload, type: GOOGLE };
    case "signout":
      localStorage.removeItem("ut");
      return { isLogged: false, user: {} };
    default:
      break;
  }
};

export const AuthProvider = ({ children }) => {
  //d = dispatch
  const [authState, d] = useReducer(AuthReducer, {
    isLogged: false,
    user: {},
    type: null,
  });
  const dispatch = (type, payload) => {
    d({ type, payload });
  };

  const Signin_Facebook = (data) => {
    dispatch("signin_facebook", data);
  };
  const Signin_Google = (data) => {
    dispatch("signin_google", data);
  };
  const Signout = () => {
    dispatch("signout");
    return;
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        Signin_Facebook,
        Signin_Google,
        Signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
