import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import AuthContext from "../Context/AuthContex";
import AppInitializer from "../Handlers/AppInitializer";
import AddAssetPage from "./AddAssetPage/AddAssetPage";
import SigninPage from "./SigninPage/SigninPage";
import { Redirect } from "react-router-dom";
import HomePage from "./HomePage/HomePage";

const Main = () => {
  const { authState } = useContext(AuthContext);

  useEffect(() => {}, []);
  return (
    <AppInitializer>
      <div>
        <Switch>
          <Route exact path="/">
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
