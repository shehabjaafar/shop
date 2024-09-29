import React from "react";
import emptycart from "../img/emptycart.jpg";
import { useNavigate } from "react-router-dom";
import MainCart from "./MainCart";

const ShoppingCart = ({ product, incerment, dicerment, del }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row justify-around items-start ">
      {product.length > 0 ? (
        <div
          className={`${
            product.length > 3
              ? "flex flex-col w-7/12 mb-5"
              : "flex flex-col w-7/12  h-screen"
          }`}
        >
          {product.map((item) => (
            <div key={item.id}>
              <MainCart
                item={item}
                incerment={incerment}
                dicerment={dicerment}
                del={del}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="h-screen w-2/3">
          <div className="flex flex-col justify-center items-center gap-3">
            <img src={emptycart} alt="emptycart" className="w-96 h-96" />
            <button
              onClick={() => navigate("/shop")}
              className="flex gap-2 text-center items-center w-40 pl-2 h-12 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-md"
            >
              shoping now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      <div className="sticky z-50 top-20 w-64 h-40 bg-gray-300 flex flex-col justify-center items-center gap-2 mr-40 mt-10">
        <h1 className="text-2xl mr-16 text-blue-gray-800">CART TOTAL</h1>

        <div className="flex flex-row justify-evenly items-center gap-36 ">
          {product.length > 0 ? (
            <h1 className="font-medium text-2xl text-blue-gray-800">
              $
              {product
                .map((i) => i.price * i.items)
                .reduce((num1, num2) => num1 + num2)}
            </h1>
          ) : (
            <h1 className="font-medium text-2xl text-blue-gray-800">$ 0</h1>
          )}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
            />
          </svg>
        </div>

        <button className="w-52 h-10 bg-blue-gray-800 text-white font-medium hover:bg-blue-gray-900">
          Pay
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
