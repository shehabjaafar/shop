import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Checkbox,
  Input,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import UseUsers from "../customs/CustomUsers";

const Login = ({ setLoged, loged, setAdmin }) => {
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState(true);
  const emailTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState(true);

  const [load, setLoad] = useState(true);
  const [invalidAcc, setInvalidAcc] = useState(true);
  const [logoutFirst, setLogoutFirst] = useState(false);
  const [showPass, setShowPass] = useState(true);
  const { users, getUsers } = UseUsers();
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  const signin = (btn) => {
    btn.preventDefault();
    users.some((user) => {
      if (loged) {
        setLogoutFirst(true);
      } else if (!emailTest.test(email)) {
        setEmailCheck(false);
      } else if (password == "") {
        setPasswordCheck(false);
      } else if (email == user.email && password == user.password) {
        navigate("/");
        setLoged(true);
        localStorage.id = user.id;
        localStorage.rule = user.rule;
      } else {
        setLoad(true);
        setInvalidAcc(false);
      }
    });
  };

  return (
    <div className="h-auto flex justify-start flex-col items-center gap-5  bg-gray-400">
      {logoutFirst && (
        <div className="text-center items-center">
          <h1 className="font-bold text-4xl text-red-700 mt-10">
            YOU MUST LOG OUT FIRST
          </h1>
        </div>
      )}

      {invalidAcc ? (
        <h1 className="text-5xl font-bold  mt-32">Login</h1>
      ) : (
        <h1 className="text-5xl font-bold  mt-32 text-red-700">
          Invalid account
        </h1>
      )}

      <h1 className="text-xs text-gray-600 ">
        write your email & passowerd to login
      </h1>

      <form action="#" className="flex flex-col gap-5">
        <div className="w-72  ">
          <Input
            color={emailCheck ? "blue-gray" : "red"}
            className="bg-white"
            label="Email"
            value={email}
            onChange={(inp) => setEmail(inp.target.value)}
          />
        </div>

        <div className="w-72 flex items-center gap-2">
          <Input
            type={showPass ? "password" : "text"}
            color={passwordCheck ? "blue-gray" : "red"}
            className="bg-white"
            label="Password"
            value={password}
            onChange={(inp) => setPassword(inp.target.value)}
          />
          <div className="hover:bg-blue-gray-300 rounded-lg">
            {showPass ? (
              <svg
                onClick={() => setShowPass(false)}
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
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            ) : (
              <svg
                onClick={() => setShowPass(true)}
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
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            )}
          </div>
        </div>

        <div className="w-full">
          <Checkbox
            color="indigo"
            className="bg-white active:bg-indigo-700"
            label={
              <Typography
                variant="small"
                className="flex items-center font-semibold text-indigo-700 "
              >
                I agree the about all rools
              </Typography>
            }
          />
        </div>

        <Button
          type="submit"
          onClick={(btn) => signin(btn)}
          className="flex justify-center items-center w-72 h-9 text-white text-center font-semibold bg-black hover:bg-gray-900 rounded-md"
        >
          {load ? "Login" : <Spinner />}
        </Button>
      </form>

      <div className="flex gap-1 items-center mb-40">
        <h1 className="text-xs text-gray-600 ">click here to</h1>

        <button
          onClick={() => navigate("/signup")}
          className="text-sm text-gray-700 hover:text-gray-900 font-semibold mb-5"
        >
          create account
        </button>
      </div>
    </div>
  );
};

export default Login;
