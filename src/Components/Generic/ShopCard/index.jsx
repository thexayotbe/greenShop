import { Wrapper } from "./style";
import { useState } from "react";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { setOrderedProducts } from "../../../redux/orderDataSlice";
import { useDispatch, useSelector } from "react-redux";

const ShopCard = (value) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const { orderData } = useSelector((state) => state.orderData);
  const dispatch = useDispatch();
  const search = (id) => {
    navigate(`/shop/${value.familyName}/${id}`);
  };
  const addToCard = (product) => {
    let result = orderData.some((value) => value.id === product.id);
    if (!result) dispatch(setOrderedProducts(product));
  };
  return (
    <Wrapper
      onMouseMove={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <Wrapper.ImgSide>
        <Wrapper.Img src={value.img} />
        <Wrapper.Buttons hover={hover}>
          <Wrapper.Button>
            <ShoppingCartOutlined onClick={() => addToCard(value)} />
          </Wrapper.Button>
          <Wrapper.Button>
            <HeartOutlined />
          </Wrapper.Button>
          <Wrapper.Button>
            <SearchOutlined id={value.id} onClick={() => search(value.id)} />
          </Wrapper.Button>
        </Wrapper.Buttons>
      </Wrapper.ImgSide>

      <Wrapper.TextSide>
        <Wrapper.Title>{value.name}</Wrapper.Title>
        <Wrapper.Price>$ {value.price}</Wrapper.Price>
      </Wrapper.TextSide>
      <Wrapper.DateText>
        {value.date.getDate()} : {value.date.getMonth() + 1} :{" "}
        {value.date.getFullYear()}
      </Wrapper.DateText>
    </Wrapper>
  );
};

export default ShopCard;
