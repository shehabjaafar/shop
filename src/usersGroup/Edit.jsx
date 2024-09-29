import React, { useEffect, useState } from "react";
import { Input } from "@material-tailwind/react";
import UseUsers from "../customs/CustomUsers";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const { user, getUser, setUser } = UseUsers();
  const [editEvent, setEditEvent] = useState(true);
  const { userId } = useParams();

  useEffect(() => {
    getUser();
  }, [editEvent]);

  const edit = (btn) => {
    btn.preventDefault();
    axios({
      method: "put",
      url: `http://localhost:3000/users/${userId}`,
      data: user,
    }).then(() => setEditEvent(!editEvent));
    navigate("/profile");
  };

  return (
    <div className="h-auto flex justify-start flex-col items-center gap-5 bg-gray-400">
      <div className="flex flex-col justify-center items-center gap-2 mb-4  mt-32 ">
        <h1 className="text-5xl font-bold">Edit</h1>
        <h1 className="text-xs text-gray-600 ">Edit your account's data</h1>
      </div>

      <form action="#" className="flex flex-col items-center gap-5 mb-40">
        <div className="flex flex-row gap-5">
          <div className="w-72">
            <Input
              value={user ? user.fname : "first name"}
              className="bg-white"
              color="blue-gray"
              onChange={(inp) => setUser({ ...user, fname: inp.target.value })}
            />
          </div>

          <div className="w-72">
            <Input
              value={user ? user.lname : "last name"}
              className="bg-white"
              color="blue-gray"
              onChange={(inp) => setUser({ ...user, lname: inp.target.value })}
            />
          </div>
        </div>

        <div className="w-full">
          <Input
            value={user ? user.email : "user email"}
            className="bg-white"
            color="blue-gray"
            onChange={(inp) => setUser({ ...user, email: inp.target.value })}
          />
        </div>

        <div className="w-full">
          <Input
            value={user ? user.password : "user password"}
            color="blue-gray"
            className="bg-white"
            onChange={(inp) => setUser({ ...user, password: inp.target.value })}
          />
        </div>

        <div className="flex flex-row gap-5">
          <div className="w-72">
            <Input
              value={user ? user.city : "user city"}
              color="blue-gray"
              className="bg-white"
              onChange={(inp) => setUser({ ...user, city: inp.target.value })}
            />
          </div>

          <div className="w-72">
            <Input
              value={user ? user.numper : "user numper"}
              color="blue-gray"
              className="bg-white"
              onChange={(inp) => setUser({ ...user, numper: inp.target.value })}
            />
          </div>
        </div>

        <button
          className="w-full h-9 text-white text-center font-semibold bg-black hover:bg-gray-900 rounded-md"
          onClick={(btn) => edit(btn)}
        >
          Edit
        </button>
      </form>
    </div>
  );
};

export default Edit;
