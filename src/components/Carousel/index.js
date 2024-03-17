import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CAROUSEL_DATA } from "../../common/constant";
import "swiper/css";
import "./carousel.css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Carousel = () => {
  return (
    <div className="mountain-carousel">
      <Swiper
        spaceBetween={5}
        pagination={true}
        modules={[Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          400: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        {CAROUSEL_DATA?.map((data, idx) => {
          return (
            <SwiperSlide key={idx}>
              <img src={data?.image} className="slide" alt="Loading..." />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
