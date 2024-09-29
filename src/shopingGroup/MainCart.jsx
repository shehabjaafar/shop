import React from "react";

const MainCart = ({ item, incerment, del, dicerment }) => {
  return (
    <div className="h-48 gap-5  mt-5  bg-gray-500 border-gray-700 shadow-sm shadow-blue-gray-700 rounded-md flex justify-center items-center">
      <img
        src={item.image}
        alt="firstcart"
        className="w-56 h-32 rounded-md size-2"
      />

      <div className="flex flex-col justify-between gap-5 items-start">
        <h1>{item.category}</h1>

        <h1>price:{item.price}</h1>

        <div className="flex flex-row justify-between gap-10 items-center">
          <div className="flex gap-5">
            <button
              onClick={() => incerment(item)}
              className="bg-blue-gray-900 hover:bg-blue-gray-800 rounded-md text-white w-8 h-8"
            >
              +
            </button>
            {item.items < 2 ? (
              <button
                disabled={true}
                onClick={() => dicerment(item)}
                className="bg-yellow-900 hover:bg-yellow-800 rounded-md text-white w-8 h-8"
              >
                -
              </button>
            ) : (
              <button
                disabled={false}
                onClick={() => dicerment(item)}
                className="bg-yellow-900 hover:bg-yellow-800 rounded-md text-white w-8 h-8"
              >
                -
              </button>
            )}

            <button
              onClick={() => del(item)}
              className="bg-red-900 hover:bg-red-800 rounded-md text-white w-8 h-8"
            >
              Del
            </button>
          </div>

          <div className="w-10 h-10 bg-white font-semibold rounded-md flex justify-center items-center">
            <h1>{item.items}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCart;
