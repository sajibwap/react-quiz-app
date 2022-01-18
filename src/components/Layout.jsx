import React from "react";
import Nav from "./Nav";
import classes from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Nav></Nav>
      <div className={classes.main}>
        <div className={classes.container}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
