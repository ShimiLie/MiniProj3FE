import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];

  const [user, setUser] = useState({
    id: bookId,
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8080/api/users/", user);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="form">
        <h1>Update a user.</h1>
        <input type="hidden" value={user.id} name="id" readOnly></input>

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
      <button onClick={handleClick}>Update this user!</button>
    </>
  );
};

export default Update;
