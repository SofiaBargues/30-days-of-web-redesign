// import { logo } from "../assets";

import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

export const Sweep = () => (
  <section className="bg-black m-10">
    <div className="flex w-full">
      <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
        content
      </div>
      <div className="grid h-full flex-grow card bg-base-300 rounded-box place-items-center">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <img
              src="https://static.wixstatic.com/media/389390_06209599a5404a2fb597a2349200f232~mv2.jpg/v1/fill/w_151,h_180,al_c,q_80,usm_2.00_1.00_0.00/389390_06209599a5404a2fb597a2349200f232~mv2.jpg"
              className="w-full bg-white"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://static.wixstatic.com/media/389390_77200ddef0dd462794b572c1081b4e45~mv2.jpg/v1/fill/w_151,h_198,al_c,q_80,usm_2.00_1.00_0.00/389390_77200ddef0dd462794b572c1081b4e45~mv2.jpg"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://static.wixstatic.com/media/389390_77200ddef0dd462794b572c1081b4e45~mv2.jpg/v1/fill/w_151,h_198,al_c,q_80,usm_2.00_1.00_0.00/389390_77200ddef0dd462794b572c1081b4e45~mv2.jpg"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://static.wixstatic.com/media/389390_77200ddef0dd462794b572c1081b4e45~mv2.jpg/v1/fill/w_151,h_198,al_c,q_80,usm_2.00_1.00_0.00/389390_77200ddef0dd462794b572c1081b4e45~mv2.jpg"
              className="w-full bg-black"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://static.wixstatic.com/media/389390_77200ddef0dd462794b572c1081b4e45~mv2.jpg/v1/fill/w_151,h_198,al_c,q_80,usm_2.00_1.00_0.00/389390_77200ddef0dd462794b572c1081b4e45~mv2.jpg"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://static.wixstatic.com/media/389390_77200ddef0dd462794b572c1081b4e45~mv2.jpg/v1/fill/w_151,h_198,al_c,q_80,usm_2.00_1.00_0.00/389390_77200ddef0dd462794b572c1081b4e45~mv2.jpg"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://static.wixstatic.com/media/389390_77200ddef0dd462794b572c1081b4e45~mv2.jpg/v1/fill/w_151,h_198,al_c,q_80,usm_2.00_1.00_0.00/389390_77200ddef0dd462794b572c1081b4e45~mv2.jpg"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://static.wixstatic.com/media/389390_77200ddef0dd462794b572c1081b4e45~mv2.jpg/v1/fill/w_151,h_198,al_c,q_80,usm_2.00_1.00_0.00/389390_77200ddef0dd462794b572c1081b4e45~mv2.jpg"
              className="w-full"
            />
          </SwiperSlide>
        </Swiper>{" "}
        content
      </div>
    </div>
  </section>
);
