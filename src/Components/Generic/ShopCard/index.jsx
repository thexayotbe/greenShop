import { Wrapper } from "./style";
import { useState } from "react";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const ShopCard = ({ img, name, price, id, familyName }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const search = (id) => {
    console.log(id);
    navigate(`/shop/${familyName}/${id}`);
  };
  return (
    <Wrapper
      onMouseMove={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <Wrapper.ImgSide>
        <Wrapper.Img src={img} />
        <Wrapper.Buttons hover={hover}>
          <Wrapper.Button>
            <ShoppingCartOutlined />
          </Wrapper.Button>
          <Wrapper.Button>
            <HeartOutlined />
          </Wrapper.Button>
          <Wrapper.Button>
            <SearchOutlined id={id} onClick={() => search(id)} />
          </Wrapper.Button>
        </Wrapper.Buttons>
      </Wrapper.ImgSide>

      <Wrapper.TextSide>
        <Wrapper.Title>{name}</Wrapper.Title>
        <Wrapper.Price>$ {price}</Wrapper.Price>
      </Wrapper.TextSide>
    </Wrapper>
  );
};

export default ShopCard;
