// import { logo } from "../assets";

import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

export const Sweep = () => (
  <section className="bg-black m-10">
    <div className="flex w-full">
      <div className="grid h-72 my-5 flex-grow  text-2xl text-balance text-center rounded-box place-items-center">
        AMC Management covers all aspects of the theatrical spectrum and hope to
        provide a diverse, talented and reliable choice.
      </div>
      <div className="divider divider-horizontal"></div>
      <div className="grid m-20  h-full flex-grow card  rounded-box place-items-center">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <img
              src="https://res.cloudinary.com/spotlightuk/image/upload/e_sharpen:62,q_auto:best,c_limit,fl_keep_attribution,w_240/v3/remote_media_prodaws/d5799370-c6b9-4eb9-92eb-59ee5bf9afde"
              className="w-full"
            />
          </SwiperSlide>
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
              src="https://static.wixstatic.com/media/389390_81e8bb4700334ba88a8c7994ed15f715~mv2.jpg/v1/fill/w_151,h_190,al_c,q_80,usm_2.00_1.00_0.00/389390_81e8bb4700334ba88a8c7994ed15f715~mv2.jpg"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://static.wixstatic.com/media/389390_a8ae89d40ba640c3872cc06a5386fed7~mv2.jpg/v1/fill/w_151,h_191,al_c,q_80,usm_2.00_1.00_0.00/389390_a8ae89d40ba640c3872cc06a5386fed7~mv2.jpg"
              className="w-full bg-black"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://static.wixstatic.com/media/389390_d5a083cf4a874770b6572574e9d2bd4b~mv2.jpg/v1/fill/w_151,h_191,al_c,q_80,usm_2.00_1.00_0.00/389390_d5a083cf4a874770b6572574e9d2bd4b~mv2.jpg"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://res.cloudinary.com/spotlightuk/image/upload/e_sharpen:62,q_auto:best,c_limit,fl_keep_attribution,w_240/v3/remote_media_prodaws/752a1800-b87d-41ad-8900-3b83b861aa8f"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="https://res.cloudinary.com/spotlightuk/image/upload/e_sharpen:62,q_auto:best,c_limit,fl_keep_attribution,w_240/v3/remote_media_prodaws/F00016186-0113"
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
        </Swiper>
      </div>
    </div>
  </section>
);
