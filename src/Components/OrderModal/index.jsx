import { Modal } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "./style";
import Button from "../Generic/Button/index";
import thank from "../../assets/icons/thank.svg";
import Card from "./Card";
import { switchOrderModalVisibility } from "../../redux/modalSlice";
import { useNavigate } from "react-router-dom";
const OrderModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orderModalVisibility } = useSelector((state) => state.modal);
  const { orderData, productCount, paymentType } = useSelector(
    (state) => state.orderData
  );
  let total = 16;
  orderData?.map((value, index) => {
    total += value.price * productCount[index];
  });
  const trackOrder = () => {
    navigate("/");
    dispatch(switchOrderModalVisibility());
  };
  return (
    <Modal
      open={orderModalVisibility}
      footer={false}
      contentStyle={{ padding: 0 }}
      width={"578px"}
      onCancel={() => dispatch(switchOrderModalVisibility())}>
      <Wrapper>
        <Wrapper.Header>
          <Wrapper.HeaderIcon src={thank} alt="" />
          <Wrapper.HeaderText>Your order has been received</Wrapper.HeaderText>
        </Wrapper.Header>
        <Wrapper.InfoSection>
          <Wrapper.Info noBorder>
            <Wrapper.InfoTitle>Order Number</Wrapper.InfoTitle>
            <Wrapper.InfoText>19586687</Wrapper.InfoText>
          </Wrapper.Info>
          <Wrapper.Info>
            <Wrapper.InfoTitle>Date</Wrapper.InfoTitle>
            <Wrapper.InfoText>
              {new Date().toLocaleDateString("en-Us")}
            </Wrapper.InfoText>
          </Wrapper.Info>{" "}
          <Wrapper.Info>
            <Wrapper.InfoTitle>Total </Wrapper.InfoTitle>
            <Wrapper.InfoText>{total}.00</Wrapper.InfoText>
          </Wrapper.Info>
          <Wrapper.Info>
            <Wrapper.InfoTitle>Payment Method</Wrapper.InfoTitle>
            <Wrapper.InfoText>{paymentType}</Wrapper.InfoText>
          </Wrapper.Info>
        </Wrapper.InfoSection>
        <Wrapper.Products>
          <Wrapper.Title>Order Details</Wrapper.Title>
          <Wrapper.Head>
            <Wrapper.HeadItem first>Products</Wrapper.HeadItem>
            <Wrapper.HeadItem>Qty</Wrapper.HeadItem>
            <Wrapper.HeadItem>Subtotal</Wrapper.HeadItem>
          </Wrapper.Head>
          {orderData.map((value, index) => {
            return <Card order={value} productCount={productCount[index]} />;
          })}
        </Wrapper.Products>
        <Wrapper.PriceSection>
          <Wrapper.PriceItems>
            <Wrapper.Title> Shiping</Wrapper.Title>
            <Wrapper.Price black> $16.00</Wrapper.Price>
          </Wrapper.PriceItems>
          <Wrapper.PriceItems>
            <Wrapper.Title> Total</Wrapper.Title>
            <Wrapper.Price>${total}.00</Wrapper.Price>
          </Wrapper.PriceItems>
        </Wrapper.PriceSection>
        <Wrapper.TextInfo>
          Your order is currently being processed. You will receive an order
          confirmation email shortly with the expected delivery date for your
          items.
        </Wrapper.TextInfo>
        <Button
          widthBtn={"162px"}
          heightBtn={"45px"}
          margin={"49px auto"}
          onClickFunc={trackOrder}>
          Track your order
        </Button>
      </Wrapper>
    </Modal>
  );
};

export default OrderModal;
