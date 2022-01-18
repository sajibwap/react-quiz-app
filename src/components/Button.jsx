import React from "react";
import classes from "../styles/Button.module.css";

const Button = ({ children }) => {
  return <div class={classes.button}>{children}</div>;
};

export default Button;
