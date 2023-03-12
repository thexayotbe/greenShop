import React, { useEffect, useState } from "react";
import { ShopOutlined } from "@ant-design/icons";
import { LocationName } from "../Generic/styles";
import { Wrapper } from "./style";
import RelatedProducts from "../ShopComponent/RelatedProducts";
import ProductList from "./ProductList";
import { useDispatch, useSelector } from "react-redux";
import CardTotal from "./CardTotal";
import Button from "../Generic/Button";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../redux/orderDataSlice";

const ShopCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orderData } = useSelector((state) => state.orderData);
  const [amount, setAmount] = useState(
    orderData.map((value) => (value.count ? value.count : 1))
  );
  const [total, setTotal] = useState([1, 2, 3]);
  const changeAmount = (type, order) => {
    if (type === "inc")
      setAmount(
        amount.map((value, index) => (index === order ? value + 1 : value))
      );
    else if (type === "dec" && amount[order] > 1)
      setAmount(
        amount.map((value, index) => (index === order ? value - 1 : value))
      );
  };
  useEffect(
    () =>
      setTotal(orderData.map((value, index) => value.price * amount[index])),
    [amount]
  );
  const deleteHandler = (product, order) => {
    dispatch(deleteProduct(product.id));
    setAmount(amount.filter((value, index) => index !== order));
  };
  return (
    <Wrapper>
      <LocationName>
        <LocationName.Home>Home</LocationName.Home>/ Shop / Shopping Card
      </LocationName>
      {orderData.length > 0 ? (
        <Wrapper.OrderSection>
          <Wrapper.Products>
            <ProductList
              amount={amount}
              changeAmount={changeAmount}
              deleteHandler={deleteHandler}
            />
          </Wrapper.Products>
          <Wrapper.CardTotals>
            <CardTotal total={total} />
          </Wrapper.CardTotals>
        </Wrapper.OrderSection>
      ) : (
        <Wrapper.CardEmpty>
          <Wrapper.TextSide>
            <ShopOutlined className="icon" /> You have not made any shopping
          </Wrapper.TextSide>
          <Button onClickFunc={() => navigate("/")}>Go to Shop</Button>
        </Wrapper.CardEmpty>
      )}
      <RelatedProducts title={"You may be interested in"} />
    </Wrapper>
  );
};

export default ShopCard;
