import React from "react";
import HomeCarouselElement from "./HomeCarouselElement";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Wrapper } from "./style";
import "swiper/css";
import "swiper/css/pagination";
const HomeCarousel = () => {
  return (
    <Wrapper>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <HomeCarouselElement />
        </SwiperSlide>
        <SwiperSlide>
          <HomeCarouselElement />
        </SwiperSlide>
        <SwiperSlide>
          <HomeCarouselElement />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default HomeCarousel;
