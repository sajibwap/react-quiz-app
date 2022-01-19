import React from "react";
import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

const Answers = () => {
  return (
    <div class={classes.answers}>
      <Checkbox className={classes.answer} text="Test Answer" />
      {/* <label class="answer" for="option1">
        <input type="checkbox" id="option1" />A New Hope 1
      </label> */}
    </div>
  );
};

export default Answers;
