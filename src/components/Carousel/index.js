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
      <Swiper slidesPerView={4} spaceBetween={5} pagination={true} modules={[Pagination]} className="mySwiper">
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
