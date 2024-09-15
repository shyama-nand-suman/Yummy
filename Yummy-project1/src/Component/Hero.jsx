import React, { useEffect, useState } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Hero = () => {
  const imageData = [
    {
      description: "Lady with a Teddy",
      "image-url":
        "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg",
    },
    {
      description: "Girl with camera",
      "image-url":
        "https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg",
    },
    {
      description: "Beautiful Girl with Glasses",
      "image-url":
        "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg",
    },

    {
      description: "Girl in black dress",
      "image-url":
        "https://images.pexels.com/photos/1385472/pexels-photo-1385472.jpeg",
    },
    {
      description: "Girl Sitting on Chair",
      "image-url":
        "https://images.pexels.com/photos/4725133/pexels-photo-4725133.jpeg",
    },
  ];

  const [sideAngle, setSideAngle] = useState(0);

  const handelpulse = () => {
    setSideAngle(imageData.length - 1 ? 0 : sideAngle + 1);
  };

  const handelmins = () => {
    setSideAngle(sideAngle === 0 ? imageData.length - 1 : sideAngle - 1);
  };

  useEffect(() => {
    const sideAngle = setInterval(() => {
      handelpulse();
    }, 2000);

    return () => clearInterval(sideAngle);
  }, [sideAngle]);

  return (
    <>
      <div>
        <div className="w-[90%] mx-auto h-[80vh] mt-5 relative">
          {imageData.map((item, i) => (
            <div key={i} className={`${sideAngle === i ? "block" : "hidden"}`}>
              <img
                src={item["image-url"]}
                alt=""
                className="w-full h-[80vh] rounded-[10px] object-cover"
              />
            </div>
          ))}
            <div className="w-[90%] mx-auto h-[80vh] opacity-25 bg-[#fd79a8] absolute top-0 left-0 rounded-2xl"></div>
            <div className="absolute w-full text-[30px] top-[50%] text-center font-semibold text-white flex justify-center">
            <p className="">Welcome to the world of Testy & Fresh Food</p>
            </div>
           
            
          <div className="flex justify-between w-full px-5 absolute top-[50%] text-white">
            <FaChevronLeft
              size={35}
              onClick={handelpulse}
              className="cursor-pointer"
            />
            <FaChevronRight
              size={35}
              onClick={handelmins}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
