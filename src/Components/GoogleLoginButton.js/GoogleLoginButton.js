import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    color: "#343a40",
    "&:hover": {
      background: "linear-gradient(to bottom left, #344675, #263148, #344675)",
      color: "white",
    },
  },
  googleIcon: { width: 30, height: 30 },
}));
const GoogleLoginButton = () => {
  const classes = useStyles();
  return (
    <Button
      variant="outlined"
      className={classes.root}
      startIcon={
        <img
          className={classes.googleIcon}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
        />
      }
    >
      {" "}
      <Typography
        style={{
          fontSize: "1rem",
          fontWeight: "400",
          fontFamily:
            ' -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
        }}
      >
        Login with Google
      </Typography>
    </Button>
  );
};

export default GoogleLoginButton;
