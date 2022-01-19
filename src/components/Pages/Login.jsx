import React from "react";
import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
import loginImg from "../../assets/images/login.svg";

const Login = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration img={loginImg} />
        <Form className={classes.login}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          ></TextInput>
          <TextInput
            type="password"
            placeholder="Enter Password"
            icon="lock"
          ></TextInput>
          <Button>
            <span>Login</span>
          </Button>
          <div className="info">
            Don't have an account? <a href="/signup">Signup</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
