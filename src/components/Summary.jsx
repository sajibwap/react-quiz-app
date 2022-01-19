import React from "react";
import classes from "../styles/Summary.module.css";
import succesImg from "../assets/images/success.png";

const Summary = () => {
  return (
    <>
      <div className={classes.summary}>
        <div className={classes.point}>
          {/* progress bar will be placed here  */}
          <p class="score">
            Your score is <br />5 out of 10
          </p>
        </div>

        <div className={classes.badge}>
          <img src={succesImg} alt="Success" />
        </div>
      </div>
    </>
  );
};

export default Summary;
