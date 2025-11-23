'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useRef } from "react";
import Slider from "react-slick";
import { RatingStars } from "./shared/RatingStars";
import { it } from "node:test";

function Responsive({list , title}) {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  var settings = {
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipeToSlide: true,
    centerPadding: "60px",
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: "40px",
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: "20px",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px",
        }
      }
    ]
  };
  return (
    <div className="slider-container px-[5%] flex flex-col gap-5 md:gap-8 lg:gap-12 my-10 md:my-12 lg:my-16">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl md:text-3xl lg:text-5xl font-anton">{title}</h3>
        <div className="flex items-center gap-8">
          <img className="w-4 lg:w-6" src="/leftArrow.svg" onClick={previous} alt="" />
          <img className="w-4 lg:w-6" src="/rightArrow.svg" onClick={next} alt="" />
        </div>
      </div>
      <Slider ref={slider => {
          sliderRef = slider;
        }} {...settings}>
        {
          list.map((item)=>{
            return (
              <div className="flex flex-col items-center justify-between gap-5 border border-gray-300 rounded-2xl p-10">
                <RatingStars rating={item.rating} />
                <div className="flex items-center gap-2">
                  <p className="text-lg">{item.author}</p>
                  <img className="w-3" src="/check.svg" alt="" />
                </div>
                <p className="text-sm text-gray-500">{item.text}</p>
              </div>
            )
          })
        }
      </Slider>
    </div>
  );
}

export default Responsive;
