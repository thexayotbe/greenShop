import React from "react";
import ProductCard from "./ProductCard";
import { Wrapper } from "./style";

const ShopComponent = () => {
  return (
    <Wrapper>
      <Wrapper.Title>Home/Shop</Wrapper.Title>
      <ProductCard />
    </Wrapper>
  );
};

export default ShopComponent;
