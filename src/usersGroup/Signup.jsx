import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  Spinner,
  Typography,
  Checkbox,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UseUsers from "../customs/CustomUsers";

const Signup = () => {
  const [fname, setFname] = useState("");
  const [fnameCheck, setFnameCheck] = useState(true);

  const [lname, setLname] = useState("");
  const [lnameCheck, setLnameCheck] = useState(true);

  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState(true);
  const emailTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState(true);

  const [numper, setNumper] = useState("");
  const [numperCheck, setNumperCheck] = useState(true);

  const [city, setCity] = useState("");
  const [cityCheck, setCityCheck] = useState(true);

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { getUsers, users } = UseUsers();

  useEffect(() => {
    getUsers();
  }, []);

  const reset = () => {
    setCityCheck(true);
    setEmailCheck(true);
    setFnameCheck(true);
    setLnameCheck(true);
    setNumperCheck(true);
    setPasswordCheck(true);
  };

  const postData = (btn) => {
    btn.preventDefault();
    const mapUsers = users.map((user) => {
      return user.email;
    });
    const someUsers = mapUsers.some((user) => {
      return user == email;
    });
    if (fname == "") {
      setFnameCheck(false);
    } else if (lname == "") {
      reset();
      setLnameCheck(false);
    } else if (!emailTest.test(email)) {
      reset();
      setEmailCheck(false);
    } else if (password == "") {
      reset();
      setPasswordCheck(false);
    } else if (numper == "") {
      reset();
      setNumperCheck(false);
    } else if (city == "") {
      reset();
      setCityCheck(false);
    } else if (someUsers) {
      reset();
      setEmailCheck(false);
    } else {
      setLoading(false);
      axios({
        method: "post",
        url: "http://localhost:3000/users",
        data: {
          fname,
          lname,
          email,
          password,
          numper,
          city,
          rule: "user",
        },
      }).then(() => {
        navigate("/login");
      });
    }
  };

  return (
    <div className="h-screen flex justify-start flex-col items-center gap-5   bg-gray-400">
      <div className="flex flex-col items-center gap-5 mb-3 mt-10">
        <h1 className="text-5xl font-bold">Sign up</h1>
        <h1 className="text-xs text-gray-600 ">
          Sign up to login to website withe your account
        </h1>
      </div>

      <form action="#" className="flex flex-col items-center gap-5">
        <div className="flex flex-row gap-5">
          <div className="flex flex-col gap-2 w-64">
            <Typography variant="h6" color={`${fnameCheck ? `black` : `red`}`}>
              {`${fnameCheck ? "First Name" : "invalid"}`}
            </Typography>
            <Input
              onChange={(inp) => setFname(inp.target.value)}
              value={fname}
              size="md"
              className=" focus:!border-gray-500 focus:border-4 bg-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div className="flex flex-col gap-2 w-64">
            <Typography
              variant="h6"
              color={`${lnameCheck ? `black` : `red`}`}
              className=""
            >
              {`${lnameCheck ? "Last Name" : "invalid"}`}
            </Typography>
            <Input
              onChange={(inp) => setLname(inp.target.value)}
              value={lname}
              size="md"
              className=" focus:!border-gray-500 focus:border-4 bg-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-2">
          <Typography
            variant="h6"
            color={`${emailCheck ? `black` : `red`}`}
            className=""
          >
            {`${emailCheck ? "Email" : "invalid"}`}
          </Typography>
          <Input
            onChange={(inp) => setEmail(inp.target.value)}
            value={email}
            size="md"
            className=" focus:!border-gray-500 focus:border-4 bg-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <Typography
            variant="h6"
            color={`${passwordCheck ? `black` : `red`}`}
            className=""
          >
            {`${passwordCheck ? "Password" : "invalid"}`}
          </Typography>
          <Input
            onChange={(inp) => setPassword(inp.target.value)}
            value={password}
            type="password"
            size="md"
            className=" focus:!border-gray-500 focus:border-4 bg-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>

        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-col gap-2   ">
            <Typography
              variant="h6"
              color={`${numperCheck ? `black` : `red`}`}
              className=""
            >
              {`${numperCheck ? "Numper" : "invalid"}`}
            </Typography>
            <input
              onChange={(inp) => setNumper(inp.target.value)}
              value={numper}
              className="w-36 h-9 rounded-md px-1"
            />
          </div>

          <div className="flex flex-col gap-2  ">
            <Typography
              variant="h6"
              color={`${cityCheck ? `black` : `red`}`}
              className=""
            >
              {`${cityCheck ? "City" : "invalid"}`}
            </Typography>
            <input
              onChange={(inp) => setCity(inp.target.value)}
              value={city}
              className="w-36 h-9 rounded-md px-1"
            />
          </div>

          <div className="flex flex-col gap-2  ">
            <Typography variant="h6" color="black" className="">
              Gender
            </Typography>
            <select className="w-36 h-9 rounded-md px-1 text-sm ">
              <option value="">Male</option>
              <option value="">Fmale</option>
            </select>
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
          onClick={(btn) => postData(btn)}
          className="flex justify-center items-center w-96 h-9 text-white text-center font-semibold bg-black hover:bg-gray-900 rounded-md "
        >
          {loading ? "Sign Up" : <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default Signup;
