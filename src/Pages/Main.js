import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import AuthContext from "../Context/AuthContex";
import FacebookInitializer from "../Handlers/FacebookInitializer";
import AddAssetPage from "./AddAssetPage/AddAssetPage";
import SigninPage from "./SigninPage/SigninPage";

const Main = () => {
  const { authState } = useContext(AuthContext);
  useEffect(() => {}, []);
  return (
    <FacebookInitializer>
      <div>
        <Switch>
          <Route exact path="/login">
            <SigninPage />
          </Route>
          <Route exact path="/addasset">
            <AddAssetPage />
          </Route>
        </Switch>
      </div>
    </FacebookInitializer>
  );
};

export default Main;
