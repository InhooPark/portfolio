import React from "react";
import Style from "@/styles/project.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

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
  const titles = ["background", "review", "stacks", "deploy"];

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
          {titles.map((title, key) => {
            return (
              <div key={key} className={Style.project_summary_text}>
                <p className={Style.project_summary_title}>{title.charAt(0).toUpperCase() + title.slice(1)}</p>
                <p>{data[`${title}`]}</p>
              </div>
            );
          })}

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
