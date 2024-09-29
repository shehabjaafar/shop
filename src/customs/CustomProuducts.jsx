import { useState } from "react";
import axios from "axios";

const UseProuducts = () => {
  const [prouducts, setProuducts] = useState([]);
  const [prouduct, setProuduct] = useState(null);

  const getProuducts = () => {
    axios({
      method: "get",
      url: "http://localhost:3000/prouducts",
    }).then((info) => setProuducts(info.data));
  };

  const getProuduct = (id) => {
    axios({
      method: "get",
      url: `http://localhost:3000/prouducts/${id}`,
    }).then((info) => setProuduct(info.data));
  };

  return {
    getProuducts,
    prouducts,
    getProuduct,
    prouduct,
    setProuduct,
    setProuducts,
  };
};

export default UseProuducts;
