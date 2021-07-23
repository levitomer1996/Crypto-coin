import React,{ useEffect }  from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from "./Context/AuthContex";
import { ModalProvider } from "./Context/ModalContext";
import GeneralModal from "./Components/Modal/Modal";
import useGoogleLogout from "./Components/GoogleLoginButton.js/useGoogleLogout";
import Navbar from './Components/Navbar/navbar';
import Main from "./Pages/Main";

// BlackDashBoard css
import "./assets/scss/black-dashboard-react.scss";
import "./assets/css/nucleo-icons.css";

import "bootstrap/dist/css/bootstrap.min.css";
import useStyles from "./App.style";
import "./App.scss";

const App = () => {

  const classes = useStyles();
  const [signOut] = useGoogleLogout();

  const pathname = window.location.pathname;
  console.log("pathname:", pathname);
  useEffect(() => {
  });

  return (
    <AuthProvider>
      <ModalProvider>
        <Router>
          <GeneralModal />
          <div className={"App"}>
            {/* {pathname == "/" ? <Navbar/> : <></>}  */}
            <Main />
          </div>
        </Router>
      </ModalProvider>
    </AuthProvider>
  );
};

export default App;
