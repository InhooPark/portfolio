import React from "react";
import Style from "@/styles/project.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/router";

type typeProject = {
  data: {
    title: string;
    background: string;
    review: string;
    stacks: string;
    deploy: string;
    img: string[];
    notion: string;
  };
};
const Project = ({ data }: typeProject) => {
  const titles = ["개발 배경", "후기", "기술 스택", "배포"];

  return (
    <article>
      <h4>{data.title}</h4>
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
            {data.img.map((img: string, k: number) => {
              return (
                <SwiperSlide className={Style.swiper_content} key={k}>
                  <img src={img} alt="project image" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <figcaption className={Style.project_summary}>
          <div className={Style.project_summary_text}>
            <p className={Style.project_summary_title}>개발 배경</p>
            <p>{data.background}</p>
          </div>
          <div className={Style.project_summary_text}>
            <p className={Style.project_summary_title}>후기</p>
            <p>{data.review}</p>
          </div>
          <div className={Style.project_summary_text}>
            <p className={Style.project_summary_title}>기술 스택</p>
            <p>{data.stacks}</p>
          </div>
          <div className={Style.project_summary_text}>
            <p className={Style.project_summary_title}>배포</p>
            <a href={data.deploy}>{data.deploy}</a>
          </div>
          <button type="button">
            <a href={data.notion} target="_blank">
              {"Read-More"} <br />
              {"(Notion)"}
            </a>
          </button>
        </figcaption>
      </figure>
    </article>
  );
};

export default Project;
