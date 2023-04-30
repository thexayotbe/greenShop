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
import { deleteProduct, setProductCount } from "../../redux/orderDataSlice";

const ShopCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orderData, productCount } = useSelector((state) => state.orderData);
  const [amount, setAmount] = useState(
    orderData.map((value) => (value.count ? value.count : 1))
  );
  const [total, setTotal] = useState([1, 2, 3]);
  const changeAmount = (type, order) => {
    dispatch(setProductCount({ type, order }));
  };
  useEffect(
    () =>
      setTotal(
        orderData.map((value, index) => value.price * productCount[index])
      ),
    [productCount]
  );
  const deleteHandler = (product, order) => {
    dispatch(deleteProduct({ type: product.id, countIndex: order }));
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
              amount={productCount}
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
