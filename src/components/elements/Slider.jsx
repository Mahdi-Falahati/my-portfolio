"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Grid } from "swiper/modules";
import Image from "next/image";

export default function Slider({
  Logos,
  height,
  delay,
  slidesPerView,
  aniamte,
  hoverAniamte,
}) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        slidesPerView={slidesPerView}
        grid={{
          rows: 1,
        }}
        autoplay={{
          delay: delay || 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Grid]}
        className="mySwiper"
      >
        {Logos.map((info, id) => {
          return (
            <SwiperSlide key={id}>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={info.logo}
                  width={"auto"}
                  height={"auto"}
                  alt={info.title}
                  className={`${height} ${aniamte ? aniamte : ""} ${
                    hoverAniamte ? "hover:" + hoverAniamte : ""
                  } cursor-ew-resize`}
                />
                <p className="text-center mt-2 font-bold italic text-gray-700 tracking-wider">
                  {info.title}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
