import React from "react";
import "./User.css";

const User = (props) => {
  return (
    <div className="user">
      <li>Name: {props.name}</li>
      <li>Email: {props.email}</li>
      <li>Phone no: {props.phone}</li>
      <li>D.O.B: {props.dob}</li>
    </div>
  );
};

export default User;
