import React, { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UseUsers from "../../customs/CustomUsers";
const TABLE_HEAD = ["first name", "last name", "edit", "delete"];

const Users = () => {
  const { users, getUsers } = UseUsers();
  const [deletEvent, setDeletEvent] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, [deletEvent]);

  const deletUser = (id) => {
    axios({
      method: "delete",
      url: `http://localhost:3000/users/${id}`,
    }).then(() => setDeletEvent(!deletEvent));
  };

  return (
    <div className="h-screen  flex ">
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

      <div className="w-4/5 p-[2em]">
        <Card className="h-full w-full overflow-y-auto max-h-screen ">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {users.map(({ fname, lname, id }, index) => (
                <tr key={index}>
                  <td className="">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {fname}
                    </Typography>
                  </td>

                  <td className="">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {lname}
                    </Typography>
                  </td>

                  <td className="">
                    <Typography
                      as={Link}
                      to={`/edit/${id}`}
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </Typography>
                  </td>

                  <td className="">
                    <Typography
                      as="button"
                      onClick={() => deletUser(id)}
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default Users;
