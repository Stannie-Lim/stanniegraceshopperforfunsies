import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { TextField, Grid, Button } from "@mui/material";

import { attemptLogin } from "../store";

const DEFAULT_USER_INPUTS = {
  username: "",
  password: "",
};

export const Login = () => {
  const [userInputs, setUserInputs] = useState(DEFAULT_USER_INPUTS);

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const onChange = (event) => {
    const { name, value } = event.target;

    setUserInputs({
      ...userInputs,
      [name]: value,
    });
  };

  const onClick = () => {
    dispatch(attemptLogin(userInputs));
    navigateTo("/");
  };

  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      style={{ width: "100%" }}
    >
      <Grid item xs={7}>
        <TextField
          fullWidth
          name="username"
          label="Username"
          value={userInputs.username}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={7}>
        <TextField
          fullWidth
          name="password"
          label="Password"
          value={userInputs.password}
          onChange={onChange}
          type="password"
        />
      </Grid>
      <Grid container item justifyContent="end" xs={7}>
        <Grid item>
          <Button onClick={onClick} variant="outlined">
            Login
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
