import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    color: "#343a40",
    width: "100%",
    fontSize: "1rem",
    fontWeight: "400",
    "&:hover": {
      background: "linear-gradient(to bottom left, #344675, #263148, #344675)",
      color: "white",
    },
  },
  facebookIcon: { width: 30, height: 30 },
}));
const FacebookLoginButton = () => {
  const classes = useStyles();
  const handleLogin = () => {
    window.FB.login(
      function (response) {
        console.log(response);
      },
      { scope: "email,user_likes", return_scopes: true }
    );
  };
  return (
    <Button
      variant="outlined"
      className={classes.root}
      startIcon={
        <img
          src="https://image.flaticon.com/icons/png/512/733/733547.png"
          className={classes.facebookIcon}
        />
      }
      onClick={() => handleLogin()}
    >
      <Typography style={{ fontSize: "1rem", fontWeight: "400" }}>
        Login with Facebook
      </Typography>
    </Button>
  );
};

export default FacebookLoginButton;
