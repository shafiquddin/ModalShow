import React from "react";
import classes from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      {props.listData.length > 0 && (
        <ul>
          {props.listData.map((item, index) => (
            <li key={index}>{`${item.userName} (${item.age} years old)`}</li>
          ))}
        </ul>
      )}
    </Card>
  );
};
export default UserList;
