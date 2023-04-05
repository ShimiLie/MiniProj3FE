import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Add = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/users/create", user);
      navigate("/");
    } catch (err) {
      throw err;
    }
  };

  return (
    <>
      <div className="form">
        <h1>Add a new user.</h1>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
        ></input>
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
        ></input>
        <input
          type="text"
          placeholder="Email Id"
          onChange={handleChange}
          name="emailId"
        ></input>
        <input
          type="text"
          placeholder="password"
          onChange={handleChange}
          name="password"
        ></input>
      </div>
      <button onClick={handleClick}>Add this user!</button>
    </>
  );
};

export default Add;
