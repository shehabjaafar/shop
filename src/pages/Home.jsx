import React from "react";
import { Rating } from "@material-tailwind/react";
import Allimgs from "../customs/CustomImgs";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const { person, glaas, buns, scrol, firstcart, secondcart, thirdcart } =
    Allimgs();

  return (
    <>
      <div className="h-screen bg-first  flex flex-row justify-start items-center ">
        <div className="ml-32 flex flex-col gap-7">
          <h1 className="text-red-600 font-bold">SUMMER COLLECTION</h1>
          <h1 className="text-gray-800 text-5xl font-semibold">
            Fall - Winter <br />
            Collections 2024
          </h1>
          <h1 className="text-gray-800">
            A specialist label creating luxury essentianl. Ethically crafted
            with <br />
            an unwavering to exceptional qualty.
          </h1>
          <button
            onClick={() => navigate("/shop")}
            className="bg-red-600 hover:bg-red-700 w-52 h-12 text-white font-bold flex items-center gap-2 justify-center"
          >
            SHOP NOW
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="h-auto flex justify-evenly items-end mt-24 mb-12">
        <div className="mb-10">
          <img src={glaas} alt="glaas" className="w-96 h-96 " />
          <h1 className="text-gray-800 text-4xl">Accessoris</h1>
          <h1 className="text-gray-800 text-xl mt-2 underline decoration-red-600">
            SHOP NOW
          </h1>
        </div>

        <div className="flex flex-col gap-12 ">
          <div className="flex flex-grow items-center">
            <div>
              <h1 className="text-gray-800 text-4xl">
                Clothing <br /> Collections 2024
              </h1>
              <h1 className="text-gray-800 text-xl mt-2 underline decoration-red-600">
                SHOP NOW
              </h1>
            </div>
            <img src={person} alt="person" />
          </div>

          <div className="flex flex-grow items-center">
            <div>
              <h1 className="text-gray-800 text-4xl">
                Shoes Spring <br /> 2024
              </h1>
              <h1 className="text-gray-800 text-xl mt-2 underline decoration-red-600">
                SHOP NOW
              </h1>
            </div>
            <img src={buns} alt="buns" />
          </div>
        </div>
      </div>

      <div className=" h-20 bg-scrol bg-cover flex justify-center items-center bg-sky-500 ">
        <h1 className="text-white text-4xl font-bold  ">
          Free shopin, 30-days return or refund guarantee.
        </h1>
      </div>

      <div className=" h-auto mt-20 mb-12 flex flex-wrap  justify-center gap-10">
        <div className="hover:shadow-2xl flex flex-col items-center gap-5 rounded-t-md">
          <img
            src={firstcart}
            alt="firstcart"
            className="w-60 h-40 rounded-md"
          />
          <div className="flex flex-col items-center gap-1 mb-5 ">
            <Rating value={4} />
            <h1 className="text-gray-600 text-xl">$</h1>
          </div>
        </div>

        <div className="hover:shadow-2xl flex flex-col items-center gap-5 rounded-t-md">
          <img
            src={secondcart}
            alt="secondcart"
            className="w-60 h-40 rounded-md"
          />
          <div className="flex flex-col items-center gap-1 mb-5 ">
            <Rating value={4} />
            <h1 className="text-gray-600 text-xl">$</h1>
          </div>
        </div>

        <div className="hover:shadow-2xl flex flex-col items-center gap-5 rounded-t-md">
          <img
            src={thirdcart}
            alt="thirdcart"
            className="w-60 h-40 rounded-md"
          />
          <div className="flex flex-col items-center gap-1 mb-5 ">
            <Rating value={4} />
            <h1 className="text-gray-600 text-xl">$</h1>
          </div>
        </div>

        <div className="hover:shadow-2xl flex flex-col items-center gap-5 rounded-t-md">
          <img src={scrol} alt="scrol" className="w-60 h-40 rounded-md" />
          <div className="flex flex-col items-center gap-1 mb-5 ">
            <Rating value={4} />
            <h1 className="text-gray-600 text-xl">$</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
