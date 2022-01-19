import React from "react";
import Form from "../Form";
import Illustration from "../Illustration";
import classes from "../../styles/Signup.module.css";
import TextInput from "../TextInput";
import Checkbox from "../Checkbox";
import Button from "../Button";
import signupImg from "../../assets/images/signup.svg";

const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration img={signupImg} />
        <Form className={classes.signup}>
          <TextInput
            type="text"
            placeholder="Enter name"
            icon="person"
          ></TextInput>
          <TextInput
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
          ></TextInput>
          <TextInput
            type="password"
            placeholder="Enter password"
            icon="lock"
          ></TextInput>
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          ></TextInput>
          <Checkbox text="  I agree to the Terms & Conditions"></Checkbox>
          <Button>
            <span>Submit now</span>
          </Button>
          <div className="info">
            Already have an account? <a href="/login">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;
