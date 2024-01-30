"use client";

import { useEffect, useState } from "react";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "../../styles/globals.css";

import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper";

const delayTime = [3000, 4000, 5000, 6000];

const getRandomDelay = (array: string | any[]) => {
  const randomDelay = array[Math.floor(Math.random() * array.length)];
  return randomDelay;
};

const Banner = () => {
  const [randomDelay, setRandomDelay] = useState(() =>
    getRandomDelay(delayTime)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomDelay(getRandomDelay(delayTime));
    }, randomDelay);
    return () => clearInterval(interval);
  }, [randomDelay]);

  const slide = [1, 2, 3];

  return (
    <div className=" bg-slate-200">
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // className="w-[800px] h-[700px]"
      >
       {/* Swiper Slide */}
       {/* {slide.map((item, index) => ( */}
            <SwiperSlide >
              <div className="">
                <Image
                  src={`/logo-yayasan-atqiya.jpeg`}
                  alt={`banner`}
                  width={300}
                  height={300}
                  className="w-full object-cover object-center"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="">
                <Image
                  src={`/logo-yayasan-atqiya.jpeg`}
                  alt={`banner`}
                  width={300}
                  height={300}
                  className="w-full object-cover object-center"
                />
              </div>
            </SwiperSlide>
          {/* ))} */}
      </Swiper>
    </div>
  );
};

export default Banner;
