import React from "react";
import { Route, Routes } from "react-router-dom";
import { Blog } from "../pages/Blog";
import { PlantCare } from "../pages/PlantCare";
import { Shop } from "../pages/Shop";
import Navbar from "../Components/Navbar";
import Home from "../pages/Home";
import ShopCard from "../Components/ShopCardSection";
import ShopComponent from "../Components/ShopComponent";
import Checkout from "../Components/Checkout";
const Root = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/shop/:familyName/:productID"
            element={<ShopComponent />}
          />
          <Route path="/shop/checkout" element={<Checkout />} />
          <Route path="/shop-card" element={<ShopCard />} />
          <Route path="/plant-care" element={<PlantCare />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </>
  );
};

export default Root;
