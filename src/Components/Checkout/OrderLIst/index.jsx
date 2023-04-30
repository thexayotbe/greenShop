import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { Wrapper } from "./style";
import cardsImg from "../../../assets/icons/cards.png";
import Button from "../../Generic/Button";
import { switchOrderModalVisibility } from "../../../redux/modalSlice";
import { setPaymentType } from "../../../redux/orderDataSlice";
const OrderList = () => {
  const dispatch = useDispatch();
  const { orderData, productCount, address } = useSelector(
    (state) => state.orderData
  );
  const [activeMethod, setActiveMethod] = useState("card");
  const [total, setTotal] = useState([1, 2, 3]);
  const [shipping, setShipping] = useState(16);
  const totalAmount = total?.reduce((a, b) => a + b);
  const addressStatus = Object.values(address).every((value) => value);
  useEffect(
    () =>
      setTotal(
        orderData.map((value, index) => value.price * productCount[index])
      ),
    [productCount]
  );
  const paymentTypeHandler = (type) => {
    setActiveMethod(type);
    dispatch(setPaymentType(type));
  };

  return (
    <Wrapper>
      <Wrapper.Title>Your Order</Wrapper.Title>
      <Wrapper.Head>
        <Wrapper.HeadItem>Products</Wrapper.HeadItem>
        <Wrapper.HeadItem>Subtotal</Wrapper.HeadItem>
      </Wrapper.Head>
      {orderData?.map((value, index) => (
        <ProductCard
          {...value}
          productCount={productCount[index]}
          key={index}
        />
      ))}
      <Wrapper.Coupon>
        Have a coupon code?
        <Wrapper.CouponSpan>Click here</Wrapper.CouponSpan>
      </Wrapper.Coupon>
      <Wrapper.TotalSection>
        <Wrapper.TotalItem>
          <Wrapper.PriceText>Subtotal</Wrapper.PriceText>
          <Wrapper.PriceText bold>${totalAmount}.00</Wrapper.PriceText>
        </Wrapper.TotalItem>
        <Wrapper.TotalItem>
          <Wrapper.PriceText>Coupon Discount</Wrapper.PriceText>
          <Wrapper.PriceText>(-) 00.00</Wrapper.PriceText>
        </Wrapper.TotalItem>
        <Wrapper.TotalItem>
          <Wrapper.PriceText>Shiping</Wrapper.PriceText>
          <Wrapper.PriceText bold> ${shipping}.00</Wrapper.PriceText>
        </Wrapper.TotalItem>
        <Wrapper.Shipping>View shipping charge</Wrapper.Shipping>
        <Wrapper.TotalItem top>
          <Wrapper.PriceText bold>Total</Wrapper.PriceText>
          <Wrapper.PriceText bold>
            ${totalAmount + shipping}.00
          </Wrapper.PriceText>
        </Wrapper.TotalItem>
        <Wrapper.Title>Payment Method</Wrapper.Title>
        <Wrapper.PaymentType
          onClick={() => paymentTypeHandler("Card")}
          className={activeMethod === "card" && "activeType"}>
          <Wrapper.CheckBox>
            {activeMethod === "Card" ? (
              <Wrapper.CheckBoxInner></Wrapper.CheckBoxInner>
            ) : (
              ""
            )}
          </Wrapper.CheckBox>{" "}
          <Wrapper.Img src={cardsImg} alt="" />
        </Wrapper.PaymentType>
        <Wrapper.PaymentType
          onClick={() => paymentTypeHandler("Dorect bank transfer")}
          className={activeMethod === "Dorect bank transfer" && "activeType"}>
          <Wrapper.CheckBox>
            {activeMethod === "Dorect bank transfer" ? (
              <Wrapper.CheckBoxInner></Wrapper.CheckBoxInner>
            ) : (
              ""
            )}
          </Wrapper.CheckBox>{" "}
          Dorect bank transfer
        </Wrapper.PaymentType>
        <Wrapper.PaymentType
          onClick={() => paymentTypeHandler("Cash on delivery")}
          className={activeMethod === "Cash on delivery" && "activeType"}>
          <Wrapper.CheckBox>
            {activeMethod === "Cash on delivery" ? (
              <Wrapper.CheckBoxInner></Wrapper.CheckBoxInner>
            ) : (
              ""
            )}
          </Wrapper.CheckBox>
          Cash on delivery
        </Wrapper.PaymentType>
        <Button
          widthBtn={"100%"}
          margin="40px 0 0 0 "
          onClickFunc={() =>
            addressStatus && dispatch(switchOrderModalVisibility())
          }>
          Place Order
        </Button>
      </Wrapper.TotalSection>
    </Wrapper>
  );
};

export default OrderList;
