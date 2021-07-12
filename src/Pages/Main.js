import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import AuthContext from "../Context/AuthContex";
import AppInitializer from "../Handlers/AppInitializer";
import AddAssetPage from "./AddAssetPage/AddAssetPage";
import SigninPage from "./SigninPage/SigninPage";
import useGoogleLogout from "../Components/GoogleLoginButton.js/useGoogleLogout";
import HomePage from "./HomePage/HomePage";

const Main = () => {
  const { authState } = useContext(AuthContext);
  // const [signOutGoogle] = useGoogleLogout();
  useEffect(() => {
    // signOutGoogle();
  }, []);
  return (
    <AppInitializer>
      <div>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <SigninPage />
          </Route>
          <Route exact path="/addasset">
            <AddAssetPage />
          </Route>
        </Switch>
      </div>
    </AppInitializer>
  );
};

export default Main;
