import React, { useEffect } from "react";
import UseProuducts from "../customs/CustomProuducts";
import { Rating } from "@material-tailwind/react";

const Shop = ({ del, addProduct }) => {
  const { getProuducts, prouducts } = UseProuducts();

  useEffect(() => {
    getProuducts();
  }, []);

  return (
    <div className="h-auto flex flex-wrap justify-center gap-10 mt-10 mb-10 ">
      {prouducts.map(({ category, price, id, image, items }, index) => (
        <div
          key={index}
          className="hover:shadow-2xl flex flex-col items-center gap-5 rounded-t-md w-72 bg-blue-gray-100 "
        >
          <img src={image} alt="firstcart" className="w-72 h-52 rounded-md" />

          <div className="flex flex-col items-center gap-1 mb-5 ">
            <h1 className="text-gray-600 text-xl">{category}</h1>

            <Rating value={3} />

            <h1 className="text-gray-600 text-xl">${price}</h1>

            <button
              onClick={() => addProduct({ category, price, id, image, items })}
              className="text-gray-600 text-lg hover:text-gray-900"
            >
              add to cart
            </button>

            <button
              onClick={() => del({ category, price, id, image, items })}
              className="text-red-600 text-lg hover:text-red-900"
            >
              delet from cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
