import React from "react";
import ProductCard from "./ProductCard";
import RelatedProducts from "./RelatedProducts";
import Reviews from "./Reviews";
import { Wrapper } from "./style";

const ShopComponent = () => {
  return (
    <Wrapper>
      <Wrapper.Title>Home/Shop</Wrapper.Title>
      <ProductCard />
      <Reviews />
      <RelatedProducts />
    </Wrapper>
  );
};

export default ShopComponent;
