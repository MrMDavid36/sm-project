import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Avatar, Toolbar, Typography, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import memories from "../../images/memories.png";
import { logout } from "../../reducers/authSlice";

export const NavBar = () => {
  const user = useSelector((state) => state.auth.auth.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth");
  };
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        ></img>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.name}
              src={user.imageUrl}
            >
              {user.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
