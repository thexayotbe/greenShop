import React from "react";
import { Wrapper } from "./style";

const ProductCard = ({ name, price, id, img, productCount }) => {
  return (
    <Wrapper>
      <Wrapper.Img src={img} alt="" />
      <Wrapper.Text>
        <Wrapper.ProductName>{name}</Wrapper.ProductName>
        <Wrapper.ID>
          SKU : <Wrapper.Span>{id}</Wrapper.Span>
        </Wrapper.ID>
      </Wrapper.Text>
      <Wrapper.Amount>(x {productCount})</Wrapper.Amount>
      <Wrapper.Price>$ {productCount * price}</Wrapper.Price>
    </Wrapper>
  );
};

export default ProductCard;
