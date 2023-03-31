import React from "react";
import Style from "@/styles/project.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type typeProject = {
  title: string;
  callout: string;
  images: string[];
  id: string;
};
const Project = ({ title, callout, images, id }: typeProject) => {
  function moreClick() {
    console.log(id);
  }
  return (
    <article>
      <h4>{title}</h4>
      <figure>
        <div className={Style.project_img_wrap}>
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className={`${Style.mySwiper} ${Style.swiper_wrap}`}
          >
            {images.map((img: string, k: number) => {
              return (
                <SwiperSlide className={Style.swiper_content} key={k}>
                  <img src={img} alt="project image" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <figcaption className={Style.project_summary}>
          {/* <pre>{callout}</pre> */}
          {callout.split("\n").map((vv, kk) => {
            return (
              <>
                <p className={Style.project_summary_text} key={kk}>
                  {vv}
                </p>
              </>
            );
          })}
          <button type="button" onClick={moreClick}>
            Read-More
          </button>
        </figcaption>
      </figure>
    </article>
  );
};

export default Project;
