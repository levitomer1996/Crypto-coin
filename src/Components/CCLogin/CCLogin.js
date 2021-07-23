import React from "react";
import "./CCLogin.scss";

import user_icon from "../../assets/img/user.png";

const CCLogin = () => {
  // const classes = useStyles();
  const handleLogin = () => {
    window.FB.login(
      function (response) {
        console.log(response);
      },
      { scope: "email,user_likes", return_scopes: true }
    );
  };
  return (
    <button className="cc_btn">
      <span className="btn_icon">
        <img src={user_icon} />
      </span>
      <span className="btn_text">התחבר/י באמצעות משתמש קיים</span>
    </button>
  );
};

export default CCLogin;
