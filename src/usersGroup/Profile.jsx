import React, { useEffect } from "react";
import { Input } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import UseUsers from "../customs/CustomUsers";

const Profile = () => {
  const navigate = useNavigate();
  const { getUser, user } = UseUsers();

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="h-96 flex justify-start items-center  flex-col mt-32 mb-40 gap-3 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-32 h-32 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>

      <div className="w-72 flex items-center gap-2 ">
        <h1 className="font-medium ">Name</h1>
        <Input label={`${user?.fname} ${user?.lname}`} disabled={true} />
      </div>

      <div className="w-72 flex items-center gap-2 ">
        <h1 className="font-medium">Email</h1>
        <Input label={`${user?.email}`} disabled={true} />
      </div>

      <div className="w-72 flex items-center gap-2 ">
        <h1 className="font-medium">numper</h1>
        <Input label={`+2${user?.numper}`} disabled={true} />
      </div>

      <div className="w-72 flex items-center gap-2 ">
        <h1 className="font-medium">Passowerd</h1>
        <Input label="***********" disabled={true} />
      </div>

      <button
        onClick={() => navigate(`/edit/${user?.id}`)}
        className="w-72 h-6 text-white text-center font-medium bg-black hover:bg-gray-900 rounded-md"
      >
        edit profile
      </button>
    </div>
  );
};

export default Profile;
