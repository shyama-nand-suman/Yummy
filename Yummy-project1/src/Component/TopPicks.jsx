import React from "react";
import { topPicks } from "../Data/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const TopPicks = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="w-[90%] mx-auto">
        <h1 className="font-bold text-3xl pl-10">What's on your mind?</h1>
        <div className="py-20">
        <Slider {...settings}>
          {topPicks.map((item, i) => (
            <div key={i} className="bg-[white] rounded-md">
              <div className=" flex justify-center items-center rounded-t-xl">
                <img src={item.img} alt="" className="w-[200px] rounded-full h-[200px] object-cover" />
              </div>
              <div className="flex flex-col justify-center items-center gap-4  p-4">
                <p className="text-xl font-semibold uppercase">{item.name}</p>
                <p className="text-xl font-semibold uppercase"> ₹{item.price}</p>
                <button className="bg-[black] w-[150px] text-white rounded-md my-6 py-[10px] text-[20px]  hover:text-[#e84393] font-semibold">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default TopPicks;
