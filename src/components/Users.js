import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/users");
        setUsers(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8080/api/users/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>User Lists</h1>
      <div className="users">
        {users.map((user) => (
          <>
            <div className="user">
              <p>User Id:{user.id}</p>
              <p>First Name:{user.firstName}</p>
              <p>Last Name:{user.lastName}</p>
              <p>Email:{user.emailId}</p>
              <button className="update">
                <Link to={`/update/${user.id}`}>Update</Link>
              </button>
              <button className="delete" onClick={() => handleDelete(user.id)}>
                Delete
              </button>
            </div>
          </>
        ))}
      </div>

      <button>
        <Link to="add">Add new User</Link>
      </button>
    </>
  );
};

export default Users;
