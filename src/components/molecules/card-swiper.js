import React, { useRef, useState } from "react";
// Import Swiper React components
import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'



import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.min.css'
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-cards";
import "../../assets/css/style.css";
import { Image } from "react-native";
import {img} from '../../assets/images/p1.jpg';

const CardSwiper = () => {
  const activeUserImage = [
    {key: 1, uri: require('../../assets/images/p1.jpg')},
    {key: 2, uri: require('../../assets/images/p2.jpg')},
    {key: 3, uri: require('../../assets/images/p3.jpg')},
    {key: 4, uri: require('../../assets/images/p4.jpg')},
    {key: 5, uri: require('../../assets/images/p5.jpg')},
    {key: 6, uri: require('../../assets/images/p6.jpg')},
    {key: 7, uri: require('../../assets/images/1.jpg')},
    {key: 8, uri: require('../../assets/images/2.jpg')},
    {key: 9, uri: require('../../assets/images/3.jpg')}
  ];

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        style={{alignSelf: 'center', justifySelf: 'center'}}
      >
        {
        activeUserImage.map(user => {
           return(
           <SwiperSlide key={user.key}>
           <Image source={user.uri} style={{
                    height: '100%',
                    width: '100%',
                    }}/> 
          </SwiperSlide>
           )
        })
      }
      
      </Swiper>
    </>
  );
}

export default CardSwiper;