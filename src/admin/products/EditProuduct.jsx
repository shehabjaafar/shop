import React, { useEffect, useState } from "react";
import UseProuducts from "../../customs/CustomProuducts";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditProuduct = () => {
  const { getProuduct, prouduct, setProuduct } = UseProuducts();
  const { prouductId } = useParams();
  const [editEvent, setEditEvent] = useState(true);

  useEffect(() => {
    getProuduct(prouductId);
  }, [editEvent]);

  const edit = (btn) => {
    btn.preventDefault();
    axios({
      method: "put",
      url: `http://localhost:3000/prouducts/${prouductId}`,
      data: prouduct,
    }).then(() => setEditEvent(!editEvent));
  };

  return (
    <div className="flex flex-row justify-center items-start  mt-32  h-screen ">
      <div className="w-1/2 flex justify-center">
        <img
          src={prouduct ? prouduct.image : "img"}
          alt="img"
          className="w-80"
        />
      </div>

      <div className="w-1/2 border-gray-600 flex flex-col gap-5 justify-center items-start  ">
        <div className="w-80">
          <label className="text-lg font-semibold text-gray-900 mr-2">
            title:
          </label>

          <input
            className=" bg-gray-300 rounded-md px-5  "
            value={prouduct ? prouduct.title : ""}
            onChange={(inp) =>
              setProuduct({ ...prouduct, title: inp.target.value })
            }
          />
        </div>

        <div className="w-80 flex">
          <label className="text-lg font-semibold text-gray-900 mr-2">
            cat:
          </label>

          <input
            className=" bg-gray-300 rounded-md px-5 "
            value={prouduct ? prouduct.category : ""}
            onChange={(inp) =>
              setProuduct({ ...prouduct, category: inp.target.value })
            }
          />
        </div>

        <div className="w-80">
          <label className="text-lg font-semibold text-gray-900 mr-2">
            price:
          </label>

          <input
            className=" bg-gray-300 rounded-md px-5 "
            value={prouduct ? prouduct.price : ""}
            onChange={(inp) =>
              setProuduct({ ...prouduct, price: inp.target.value })
            }
          />
        </div>

        <button
          className="bg-gray-900 hover:bg-gray-800 w-80 text-lg font-semibold text-white rounded-md"
          onClick={(btn) => edit(btn)}
        >
          edite
        </button>
      </div>
    </div>
  );
};

export default EditProuduct;
