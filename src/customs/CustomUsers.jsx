import React, { useState } from "react";
import axios from "axios";

const UseUsers = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const getUsers = () => {
    axios({
      method: "get",
      url: "http://localhost:3000/users",
    }).then((info) => setUsers(info.data));
  };
  const getUser = () => {
    axios({
      method: "get",
      url: `http://localhost:3000/users/${localStorage.id}`,
    }).then((info) => setUser(info.data));
  };
  return { getUser, user, getUsers, users, setUser };
};

export default UseUsers;
