import React from "react";
import classes from "../styles/Illustration.module.css";
import signupImg from "../assets/images/signup.svg";

const Illustration = () => {
  return (
    <>
      <div class={classes.illustration}>
        <img src={signupImg} alt="Signup" />
      </div>
    </>
  );
};

export default Illustration;
