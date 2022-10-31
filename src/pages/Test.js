import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "../styles/Test.css"
import 'swiper/css';

export default function Test() {
  return (
    <div className='test-page-container'>
      <Swiper
      spaceBetween={100}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img className='test-page-image' src={ require("../assets/images/activityPhoto.png") }  /></SwiperSlide>
      <SwiperSlide><img className='test-page-image' src={ require("../assets/images/activityPhoto.png") }  /></SwiperSlide>
      <SwiperSlide><img className='test-page-image' src={ require("../assets/images/activityPhoto.png") }  /></SwiperSlide>
      <SwiperSlide><img className='test-page-image' src={ require("../assets/images/activityPhoto.png") }  /></SwiperSlide>
    </Swiper>
    </div>
  )
}
