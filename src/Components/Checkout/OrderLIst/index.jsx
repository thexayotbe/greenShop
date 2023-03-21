import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { Wrapper } from "./style";

const OrderList = () => {
  const { orderData, productCount } = useSelector((state) => state.orderData);
  return (
    <Wrapper>
      <Wrapper.Title>Your Order</Wrapper.Title>
      <Wrapper.Head>
        <Wrapper.HeadItem>Products</Wrapper.HeadItem>
        <Wrapper.HeadItem>Subtotal</Wrapper.HeadItem>
      </Wrapper.Head>
      {orderData?.map((value, index) => (
        <ProductCard {...value} productCount={productCount[index]} />
      ))}
      <Wrapper.Coupon>
        Have a coupon code?
        <Wrapper.Coupon green>Click here</Wrapper.Coupon>
      </Wrapper.Coupon>
      <Wrapper.TotalSection>
        <Wrapper.TotalItem>
          <Wrapper.PriceText>Subtotal</Wrapper.PriceText>
          <Wrapper.PriceText bold>$2,683.00</Wrapper.PriceText>
        </Wrapper.TotalItem>
        <Wrapper.TotalItem>
          <Wrapper.PriceText>Coupon Discount</Wrapper.PriceText>
          <Wrapper.PriceText>(-) 00.00</Wrapper.PriceText>
        </Wrapper.TotalItem>
        <Wrapper.TotalItem>
          <Wrapper.PriceText>Shiping</Wrapper.PriceText>
          <Wrapper.PriceText bold> $16.00</Wrapper.PriceText>
        </Wrapper.TotalItem>

        <Wrapper.Shipping>View shipping charge</Wrapper.Shipping>
        <Wrapper.TotalItem top>
          <Wrapper.PriceText bold>Total</Wrapper.PriceText>
          <Wrapper.PriceText bold>$2,699.00</Wrapper.PriceText>
        </Wrapper.TotalItem>
        <Wrapper.Title>Payment Method</Wrapper.Title>
      </Wrapper.TotalSection>
    </Wrapper>
  );
};

export default OrderList;
