import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./Input";
import useStyles from "./AuthStyles";

const Auth = () => {
  //   const state = null;
  const classes = useStyles();
  const [isSignup, setIsSignup] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const alreadySignedUp = "Already have an account? Sign In";
  const notSignedUp = "Haven't signed up yet? Sign Up";
  const handleSubmit = () => {};
  const handleChange = () => {};
  const handleSwitchAutType = () => {
    setIsSignup((prevState) => !prevState);
    setShowPassword(false);
  };
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="First Name"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="Last Name"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              handleShowPassword={() =>
                setShowPassword((prevShowPassword) => !prevShowPassword)
              }
              type={showPassword ? "test" : "password"}
            />
            {isSignup && (
              <Input
                name="confirm Password"
                label="RepeatPassword"
                handleOnChange={handleChange}
                handleShowPassword={() =>
                  setShowPassword((prevShowPassword) => !prevShowPassword)
                }
                type={showPassword ? "test" : "password"}
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={handleSwitchAutType}>
                {isSignup ? alreadySignedUp : notSignedUp}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
