"use client";

import { useEffect, useState } from "react";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "../../../styles/globals.css";

import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper";

const delayTime = [3000, 4000, 5000, 6000];

const getRandomDelay = (array: string | any[]) => {
  const randomDelay = array[Math.floor(Math.random() * array.length)];
  return randomDelay;
};

const BannerSwiperSlide = () => {
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
    <section className="bg-gradient-to-t antialiased bg-no-repeat text-white flex-col  overflow-hidden bg-center">
      <div className=" relative w-full flex flex-col justify-center items-center">
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full"
        >
          {/* Swiper Slide */}
          {/* {slide.map((item, index) => ( */}
          <SwiperSlide>
            <div
              className="relative overflow-hidden h-full bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                src={`/images/PPDB.jpg`}
                alt={`banner`}
                className=" relative"
                style={{ objectFit: "none", height: "750px" }}
              />
              <div className="z-10 bold-40 absolute right-40 top-2/4 text-black">
                Daftar
              </div>
            </div>
          </SwiperSlide>
          {/* ))} */}
        </Swiper>
      </div>
    </section>
  );
};

export default BannerSwiperSlide;
