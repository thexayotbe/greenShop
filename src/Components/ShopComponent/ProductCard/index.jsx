import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "./style";
import { data } from "../../../mock/data";
import flower8 from "../../../assets/images/flower8.png";
import flower9 from "../../../assets/images/flower9.png";
import flower3 from "../../../assets/images/flower3.png";
import starFull from "../../../assets/icons/starFull.svg";
import starEmpty from "../../../assets/icons/starEmpty.svg";
const ProductCard = () => {
  const { familyName, productID } = useParams();
  const product = data[familyName][productID - 1];
  const [selectedProduct, setSelectedProduct] = useState({
    product,
    size: "S",
    count: 0,
    favourite: false,
  });
  const [activeImg, setActiveImg] = useState(product.img);
  const [activeImgNumber, setActiveImgNumber] = useState(0);
  const images = [product.img, flower8, flower9, flower3];
  const changeImg = (img, number) => {
    setActiveImg(img);
    setActiveImgNumber(number);
  };
  const changeProduct = (value, type) => {
    switch (type) {
      case "size":
        setSelectedProduct({ ...selectedProduct, size: value });
        break;
      case "count":
        selectedProduct({ ...selectedProduct, count: value });
    }
  };
  return (
    <Wrapper>
      <Wrapper.ImgSection>
        <Wrapper.Views>
          {images.map((value, index) => {
            return (
              <Wrapper.ViewImg
                key={index}
                src={value}
                alt={""}
                className={`${activeImgNumber === index && "active"}`}
                onClick={(e) => changeImg(e.target.src, index)}
              />
            );
          })}
        </Wrapper.Views>
        <Wrapper.ProductImgSection>
          <Wrapper.ProductImg src={activeImg} />
        </Wrapper.ProductImgSection>
      </Wrapper.ImgSection>
      <Wrapper.InfoSection>
        <Wrapper.Title>{product.name}</Wrapper.Title>
        <Wrapper.Info>
          <Wrapper.Price>$ {product.price}.00</Wrapper.Price>
          <Wrapper.Rate>
            <Wrapper.Stars>
              <Wrapper.Star alt={""} src={starFull} />
              <Wrapper.Star alt={""} src={starFull} />
              <Wrapper.Star alt={""} src={starFull} />
              <Wrapper.Star alt={""} src={starFull} />
              <Wrapper.Star alt={""} src={starEmpty} />
            </Wrapper.Stars>
            <Wrapper.ReviewCount>19 Customer Review </Wrapper.ReviewCount>
          </Wrapper.Rate>
        </Wrapper.Info>
        <Wrapper.Order>
          <Wrapper.ShortDecs>Short Description:</Wrapper.ShortDecs>
        </Wrapper.Order>
        <Wrapper.Description>
          The ceramic cylinder planters come with a wooden stand to help elevate
          your plants off the ground. The ceramic cylinder planters come with a
          wooden stand to help elevate your plants off the ground.
        </Wrapper.Description>
        <Wrapper.ShortDecs>Size :</Wrapper.ShortDecs>
        <Wrapper.SizeSection>
          <Wrapper.Size
            onClick={() => changeProduct("S", "size")}
            className={`${selectedProduct.size === "S" && "activeSize"}`}>
            S
          </Wrapper.Size>
          <Wrapper.Size
            onClick={() => changeProduct("M", "size")}
            className={`${selectedProduct.size === "M" && "activeSize"}`}>
            M
          </Wrapper.Size>
          <Wrapper.Size
            onClick={() => changeProduct("L", "size")}
            className={`${selectedProduct.size === "L" && "activeSize"}`}>
            L
          </Wrapper.Size>
          <Wrapper.Size
            onClick={() => changeProduct("XL", "size")}
            className={`${selectedProduct.size === "XL" && "activeSize"}`}>
            XL
          </Wrapper.Size>
        </Wrapper.SizeSection>
        <Wrapper.Buttons>
          <Wrapper.CountChangeBtn>-</Wrapper.CountChangeBtn>
          <Wrapper.Count>{selectedProduct.count}</Wrapper.Count>
          <Wrapper.CountChangeBtn>+</Wrapper.CountChangeBtn>
          <Wrapper.ActionButton>Buy Now</Wrapper.ActionButton>
          <Wrapper.ActionButton>Add to cart</Wrapper.ActionButton>
          <Wrapper.Like></Wrapper.Like>
        </Wrapper.Buttons>
      </Wrapper.InfoSection>
    </Wrapper>
  );
};

export default ProductCard;
