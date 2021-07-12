import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./Pages/Main";
import useStyles from "./App.style";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { AuthProvider } from "./Context/AuthContex";
import { ModalProvider } from "./Context/ModalContext";
import GeneralModal from "./Components/Modal/Modal";
import useGoogleLogout from "./Components/GoogleLoginButton.js/useGoogleLogout";
import { useEffect } from "react";

const App = () => {
  const classes = useStyles();
  const [signOut] = useGoogleLogout();
  useEffect(() => {
    // signOut();
  });
  return (
    <AuthProvider>
      <ModalProvider>
        <Router>
          <GeneralModal />
          <div className={"App"}>
            <Main />
          </div>
        </Router>
      </ModalProvider>
    </AuthProvider>
  );
};

export default App;
