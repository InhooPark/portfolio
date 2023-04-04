import React from "react";
import Style from "@/styles/project.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/router";

type typeProject = {
  title: string;
  callout: string;
  images: string[];
  id: string;
};
const Project = ({ title, callout, images, id }: typeProject) => {
  const router = useRouter();
  function moreClick() {
    router.push(`/projectdetail/${id}`);
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
              type: "fraction",
            }}
            modules={[Pagination]}
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
          {callout.split("\n").map((vv, kk) => {
            return vv === "" ? (
              <span key={kk}></span>
            ) : (
              <div className={Style.project_summary_text} key={kk}>
                {callout.split("\n").length - 1 === kk ? (
                  <a href={vv} target="_blank">
                    {vv}
                  </a>
                ) : vv === "후기" || vv === "개발 배경" || vv === "기술 스택" || vv === "배포" ? (
                  <p className={Style.project_summary_title}>{vv}</p>
                ) : (
                  <p>{vv}</p>
                )}
              </div>
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
