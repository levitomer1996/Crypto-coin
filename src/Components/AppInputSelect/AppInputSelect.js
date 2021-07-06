import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import useStyles from "./AppInputSelect.styles";

export default ({ options }) => {
  const classes = useStyles();
  const [state, setState] = React.useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    console.log(name);
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel
        htmlFor="outlined-age-native-simple"
        style={{ color: "white" }}
      >
        Choose coin
      </InputLabel>
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={state}
        onChange={handleChange}
      >
        {options
          ? options.map((coinName) => {
              return (
                <MenuItem value={coinName} className={classes.option}>
                  {coinName}
                </MenuItem>
              );
            })
          : null}
      </Select>
    </FormControl>
  );
};
