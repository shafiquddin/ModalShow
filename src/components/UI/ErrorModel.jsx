// import React, { useState } from "react";
import classes from "./ErrorModel.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModel = (props) => {
  const closeHandler = () => {
    props.onClose();
  };
  return (
    <div>
      <div className={classes.backdrop}></div>
      <Card className={classes.modal} onClick={closeHandler}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button type={"button"}>Close</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModel;
