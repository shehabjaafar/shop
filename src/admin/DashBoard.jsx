import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UseProuducts from "../customs/CustomProuducts";
import UseUsers from "../customs/CustomUsers";

const DashBoard = () => {
  const { getProuducts, prouducts } = UseProuducts();
  const { users, getUsers } = UseUsers();
  const navigate = useNavigate();

  useEffect(() => {
    getProuducts();
    getUsers();
  }, []);

  return (
    <div className="h-screen  flex  ">
      <div className="h-screen bg-blue-gray-900 w-1/5 text-center flex flex-col justify-evenly">
        <button
          onClick={() => navigate("/dashboard")}
          className="text-white text-3xl font-semibold hover:text-light-blue-200"
        >
          Dash Board
        </button>

        <button
          onClick={() => navigate("/users")}
          className="text-white text-3xl font-semibold hover:text-light-blue-200"
        >
          Users
        </button>

        <button
          onClick={() => navigate("/products")}
          className="text-white text-3xl font-semibold hover:text-light-blue-200"
        >
          Products
        </button>
      </div>

      <div className="w-4/5 flex flex-row justify-evenly items-center">
        <div className="w-72 h-72 bg-blue-gray-900 rounded-md flex flex-col justify-evenly items-center">
          <h1 className="text-light-blue-200 text-3xl font-semibold">Users</h1>
          <div className="flex gap-2">
            <h1 className="text-white text-xl">Number of users :</h1>
            <h1 className="text-green-600 text-2xl font-medium">
              {users.length}
            </h1>
          </div>
          <h1 className="text-white text-xl">Last user rejested :</h1>
          <button
            onClick={() => navigate("/users")}
            className="bg-light-blue-400 text-white font-medium w-28 h-7 rounded-md hover:bg-light-blue-500"
          >
            show users
          </button>
        </div>

        <div className="w-72 h-72 bg-blue-gray-900 rounded-md flex flex-col justify-evenly items-center">
          <h1 className="text-light-blue-200 text-3xl font-semibold">
            Products
          </h1>
          <div className="flex gap-2">
            <h1 className="text-white text-xl">Number of products :</h1>
            <h1 className="text-green-600 text-2xl font-medium">
              {prouducts.length}
            </h1>
          </div>

          <h1 className="text-white text-xl">Last product rejested :</h1>
          <button
            onClick={() => navigate("/products")}
            className="bg-light-blue-400 text-white font-medium w-28 h-7 rounded-md hover:bg-light-blue-500"
          >
            show products
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
