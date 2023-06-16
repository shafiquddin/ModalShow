import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModel from "../UI/ErrorModel";

const initial_state = {
  userName: "",
  age: "",
};

const AddUser = (props) => {
  const [userInput, setUserInput] = useState(initial_state);
  const [error, setError] = useState();
  const addUserHandler = (e) => {
    e.preventDefault();
    if (
      userInput.userName.trim().length === 0 ||
      userInput.age.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "please enter valid name and age (non-empty values)",
      });
      return;
    }
    if (+userInput.age < 0) {
      setError({
        title: "Invalid age",
        message: "please enter valid age ( > 0)",
      });
      return;
    }
    props.onAddUser(userInput, error);
    setUserInput(initial_state);
  };
  const inputChangeHandler = (input, value) => {
    setUserInput((preState) => {
      return { ...preState, [input]: value };
    });
  };
  return (
    <div>
      {error && (
        <ErrorModel
          onClose={() => setError(null)}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="userName"
            type="text"
            value={userInput.userName}
            onChange={(event) =>
              inputChangeHandler("userName", event.target.value)
            }
          />
          <label htmlFor="id">Age(Years)</label>
          <input
            id="age"
            value={userInput.age}
            onChange={(event) => inputChangeHandler("age", event.target.value)}
            type="number"
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
