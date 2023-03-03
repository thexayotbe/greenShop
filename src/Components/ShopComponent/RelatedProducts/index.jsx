import React from "react";
import { useSelector } from "react-redux";
import { Wrapper } from "./style";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ShopCard from "../../Generic/ShopCard";
import { useParams } from "react-router-dom";

const RelatedProducts = () => {
  const { sortedData } = useSelector((state) => state.filterData);
  const { familyName } = useParams();
  console.log(familyName);
  return (
    <Wrapper>
      <Wrapper.Title>Releted Products</Wrapper.Title>
      <Wrapper.Slider>
        <Swiper
          style={{ height: "400px", display: "flex", gap: "30px " }}
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper">
          {sortedData.map((value, index) => {
            return (
              index <= 6 && (
                <SwiperSlide key={index}>
                  {" "}
                  <ShopCard {...value} familyName={familyName} />
                </SwiperSlide>
              )
            );
          })}
        </Swiper>
      </Wrapper.Slider>
    </Wrapper>
  );
};

export default RelatedProducts;
