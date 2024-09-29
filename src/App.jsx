import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

// commpnents import
import Nav from "./commponents/Nav";
import Footer from "./commponents/Footer";

// users group import
import Login from "./usersGroup/Login";
import Signup from "./usersGroup/Signup";
import Profile from "./usersGroup/Profile";
import Edit from "./usersGroup/Edit";

// pages import
import Error from "./pages/Error";
import Home from "./pages/Home";

// shoping import
import Shop from "./shopingGroup/Shop";
import ShoppingCart from "./shopingGroup/ShoppingCart";

// admin import
import DashBoard from "./admin/DashBoard";
import Products from "./admin/products/Products";
import EditProuduct from "./admin/products/EditProuduct";
import Users from "./admin/users/Users";

import Slick from "./pages/Slick";

const App = () => {
  const [loged, setLoged] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    localStorage.id ? setLoged(true) : setLoged(false);
    localStorage.rule == "admin" ? setAdmin(true) : setAdmin(false);
  }, [loged]);

  const logOut = () => {
    setLoged(false);
    localStorage.removeItem("id");
    localStorage.removeItem("rule");
  };
  const incerment = (obj) => {
    const newArr = product.map((i, x) => {
      if (obj.id == i.id) {
        i.items++;
      }
      return i;
    });
    setProduct(newArr);
  };
  const dicerment = (obj) => {
    const newArr = product.map((i, x) => {
      if (obj.id == i.id) {
        i.items--;
      }
      return i;
    });
    setProduct(newArr);
  };
  const del = (obj) => {
    const newArr = product.filter((i) => {
      return i.id !== obj.id;
    });
    setProduct(newArr);
  };
  const addProduct = (obj) => {
    const newArr = product.some((i) => {
      return i.id == obj.id;
    });
    if (newArr) {
      incerment(obj);
    } else {
      setProduct([...product, obj]);
    }
  };

  return (
    <>
      <Nav
        loged={loged}
        logOut={logOut}
        admin={admin}
        product={product.length}
      />

      <Routes>
        {/*  pages routes */}
        <>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
        </>

        {/* shoping routes */}
        <>
          <Route
            path="/shop"
            element={<Shop addProduct={addProduct} del={del} />}
          />
          <Route
            path="/shoppingcart"
            element={
              <ShoppingCart
                product={product}
                incerment={incerment}
                dicerment={dicerment}
                del={del}
              />
            }
          />
        </>

        {/* users group routes */}
        <>
          <Route
            path="/login"
            element={
              <Login setLoged={setLoged} loged={loged} setAdmin={setAdmin} />
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/profile"
            element={localStorage.id ? <Profile /> : <Error />}
          />
          <Route
            path="/edit/:userId"
            element={localStorage.id ? <Edit /> : <Error />}
          />
        </>

        {/* admin routes */}
        <>
          <Route
            path="/dashboard"
            element={localStorage.rule == "admin" ? <DashBoard /> : <Error />}
          />
          <Route
            path="/products"
            element={localStorage.rule == "admin" ? <Products /> : <Error />}
          />
          <Route
            path="/admin/editprouduct/:prouductId/name/:prouductName"
            element={
              localStorage.rule == "admin" ? <EditProuduct /> : <Error />
            }
          />
          <Route
            path="/users"
            element={localStorage.rule == "admin" ? <Users /> : <Error />}
          />
        </>
        <Route path="/x" element={<Slick />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
