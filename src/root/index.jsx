import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Blog } from "../pages/Blog";
import Home from "../pages/Home";
import { PlantCare } from "../pages/PlantCare";
import { Shop } from "../pages/Shop";

const Root = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:familyName/:productID" element={<Shop />} />
          <Route path="/plant-care" element={<PlantCare />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </>
  );
};

export default Root;
