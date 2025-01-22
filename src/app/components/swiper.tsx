'use client';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import banner from '../images/banner.jpg';

import styled from 'styled-components';

const StyledSwiper = styled(ReactSwiper)`
  width: 300px;

  @media only screen and (min-width: 500px) {
    width: 450px;
  }
  @media only screen and (min-width: 700px) {
    width: 650px;
  }
  @media only screen and (min-width: 900px) {
    width: 850px;
  }
  @media only screen and (min-width: 1100px) {
    width: 1050px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: white;
    filter: drop-shadow(4px -4px 5px black);
  }
`;

export default function Swiper() {
  return (
    <StyledSwiper
      navigation={true}
      modules={[Navigation]}
      className=" m-0 mt-10 md:mt-16 "
      spaceBetween={0}
      slidesPerView={1}
    >
      <SwiperSlide>
        <img src={banner.src} className="h-full w-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner.src} className="h-full w-full object-cover" />
      </SwiperSlide>{' '}
      <SwiperSlide>
        <img src={banner.src} className="h-full w-full object-cover" />
      </SwiperSlide>{' '}
      <SwiperSlide>
        <img src={banner.src} className="h-full w-full object-cover" />
      </SwiperSlide>
    </StyledSwiper>
  );
}
