import Layout from "@/src/Layout";
import React, { useEffect, useState } from "react";
import Style from "@/styles/about.module.scss";
import Link from "next/link";
import Archive from "@/json/archive.json";
import Headmeta from "@/src/Headmeta";

const About = () => {
  const [myAge, setMyAge] = useState(Number);
  const today = new Date();
  const birth = new Date(1994, 7, 22);
  const [profileTarget, setProfileTarget] = useState([false, false, false, false]);
  const infoInit = {
    title: "It is what it is",
    korTitle: "(이미 일어난 일은 어쩔 수 없어)",
    content:
      "\n그냥 하는 사람\n\n 프로 스포츠 선수들의 'It is what it is'\n 스포츠용품 제작 회사인 나이키사(社)의 'Just do it'\n 그들이 공통적으로 말하는 것, 이미 상황은 벌어졌고 그냥 해!\n 그냥 하는 남자 박인후입니다.",
  };
  const [info, setInfo] = useState(infoInit);
  const [specialOn, setSpecialOn] = useState(false);

  function ageFunc() {
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  }
  function mOver(quad: number) {
    let arr = [false, false, false, false];
    arr[quad] = true;
    setProfileTarget(arr);
    setSpecialOn(true);

    switch (quad) {
      case 0:
        setInfo({
          title: "Challenge",
          korTitle: "(도전)",
          content:
            "\n네번째 분기점 요리\n\n 요리는 저에게 있어 큰 도전이었습니다. 시도 해보지 않았고, 시도할거라는 생각도 하지 못했던 영역이었습니다. 어떻게 보면 요리를 전공하는 다른 친구들과 비교해 늦은 시작을 했기 때문에 그 부분에서 오는 차별 역시 겪어야 했습니다. 그럼에도 불구하고 하게 된 이유는 그냥 하고싶어서였습니다. 하고싶기 때문에 버티다보니 인정도 받을 수 있었고 그로인한 보람도 느낄 수 있었습니다. 요리를 통해 새로운 도전을 시도할 때 다른이의 차별어린 시선을 견디는 법을 배웠습니다.",
        });
        break;
      case 1:
        setInfo({
          title: "Balance",
          korTitle: "(균형)",
          content:
            "\n첫번째 분기점 수영\n\n 수영은 저에게 있어서 큰 분기점 중 하나입니다.\n 수영을 잘 하려면 신체 좌우의 균형도 중요하고, 팔이 움직이는만큼 다리도 움직여줘야하며, 호흡을 줄인만큼 속도가 오르지만 그만큼 장시간 수영을 할 경우 오히려 호흡관리에 문제가 와 낮은 퍼포먼스가 나오게 됩니다.\n 수영을 통해 모든 일에는 균형이 중요하다는 것을 알게 되었고, 균형을 유지할 수 있을 때 비로소 최선의 결과물을 얻을 수 있다는 사실을 배우게 되었습니다.",
        });
        break;
      case 2:
        setInfo({
          title: "Creative",
          korTitle: "(창조)",
          content:
            "\n세번째 분기점 프로그래밍\n\n 프로그래밍을 처음 접한것은 게임 스타크래프트의 유즈맵 제작을 통해서였습니다.\n 스타크래프트 유즈맵 제작을 통해 나만의 세상을 구현한다는 매력에 빠졌고 어린나이에 다른사람이 알고있는 내용과 내가 알고있는 내용을 공유하며 더 성장하고 싶은 마음에 카페도 운영하는등 처음으로 주도적으로 모임을 만들었던 경험이 있습니다. 덕분에 저에게 프로그래밍은 즐거운 기억으로 남아있고, 현재까지도 저만의 세상을 구현하기 위한 목표를 가지고 있습니다.",
        });
        break;
      case 3:
        setInfo({
          title: "Effort, cooperation",
          korTitle: "(노력과 협력)",
          content:
            "\n두번째 분기점 게임\n\n 저는 게임을 정말 좋아하는 아이였습니다.\n 게임을 왜 좋아했을까 생각을 해보면, 인생에서 처음으로 무언가 결과물을 냈던 행위가 게임이었기 때문인 것 같습니다. 초등학생때 시작했던 게임이 중학생이 되며 랭커반열에 오르며 누가 와도 내가 이길 수 있다는 자신감을 얻은 최초의 행위였다고 생각합니다.\n 그러한 행위를 통해 노력에는 합당한 보상이 따른다는 것을 알게 되었고, 타인과 합심하여 노력한다면 혼자서 할 때 보다 더 좋은 결과를 낼 수 있다는 협동의 미학도 알게 된 첫 경험이었습니다.",
        });
        break;
      default:
        return;
    }
  }
  function mLeave() {
    setProfileTarget([false, false, false, false]);
    setInfo(infoInit);
    setSpecialOn(false);
  }

  useEffect(() => {
    let age = ageFunc();
    setMyAge(age);
  }, [myAge]);

  return (
    <Layout>
      <Headmeta title="About Me" />
      <main className={Style.about_main}>
        <section className={Style.title_section}>
          <div className={Style.title_visual_img_wrap}>
            <img className={Style.visual_img} src="/img/about/visual3.png" alt="color visual" />
            <img className={Style.visual_corner} src="/img/about/side.png" alt="visual corner" />
          </div>
          <div className={Style.title_text}>
            <h1>{"Hello i'm Inhoo Park"}</h1>
            <p>{"I am front-end developer"}</p>
          </div>

          <div className={Style.visual_scroll}>
            <span>
              S<br />C<br />R<br />O<br />L<br />L
            </span>
            <p></p>
          </div>
        </section>
        <section className={Style.profile_section}>
          <h2> Profile </h2>

          <article className={Style.profile_info}>
            <p>
              <b>
                {"이름"}
                <small>{"(Name)"}</small>
              </b>
              <br />
              {"박인후 "}
              <small>{"(Inhoo Park)"}</small>
            </p>
            <p>
              <b>
                {"나이"}
                <small>{"(Age)"}</small>
              </b>
              <br />
              {myAge}&nbsp;
              <small>{"(22.07.1994)"}</small>
            </p>
            <p>
              <b>
                {"거주지"}
                <small>{"(Location)"}</small>
              </b>
              <br />
              {"경기도 의정부시"} <br />
              <small>{"(Uijeongbu-si, Gyeonggi-do, Republic of Korea)"}</small>
            </p>
            <p>
              <b>
                {"연락처"}
                <small>{"(Contact)"}</small>
              </b>
              <br />
              {"Number : "}
              <small>{"010-8827-3804"}</small>
              <br />
              {"E-mail : "}
              <small>{"k.estrel.860@gmail.com"}</small>
            </p>
          </article>

          <article className={Style.profile_about}>
            <figure>
              <div className={Style.profile_img_container}>
                <div className={Style.profile_icon_wrap}>
                  <div
                    className={profileTarget[1] ? `${Style.profile_icon} ${Style.hover}` : Style.profile_icon}
                    onMouseOver={() => mOver(1)}
                    onMouseLeave={() => mLeave()}
                  >
                    <svg viewBox="0 0 64 64" strokeWidth="3" stroke="#399CA3" fill="none">
                      <path
                        d="M39,34,31.05,23.52l-2-2.59-3.88-5.22L22,18.15,14.66,23.9a2.28,2.28,0,0,0,0,3.11c1.14,1.19,2.46,1.33,3.17.78l6.33-5.37,3.21,3.95-8.9,6.94"
                        strokeLinecap="square"
                      ></path>
                      <circle cx="42.38" cy="21.91" r="6.1" strokeLinecap="square"></circle>
                      <path
                        d="M4.79,41.15c3.89,0,3.89,4,7.77,4s3.89-4,7.77-4,3.89,4,7.77,4,3.89-4,7.78-4,3.89,4,7.77,4,3.89-4,7.78-4,3.89,4,7.78,4"
                        strokeLinecap="square"
                      ></path>
                      <path
                        d="M4.79,33.06c3.89,0,3.89,4,7.77,4s3.89-4,7.77-4,3.89,4,7.77,4,3.89-4,7.78-4,3.89,4,7.77,4,3.89-4,7.78-4,3.89,4,7.78,4"
                        strokeLinecap="square"
                      ></path>
                    </svg>
                  </div>

                  <div
                    className={profileTarget[3] ? `${Style.profile_icon} ${Style.hover}` : Style.profile_icon}
                    onMouseOver={() => mOver(3)}
                    onMouseLeave={() => mLeave()}
                  >
                    <svg viewBox="0 0 512 512" fill="#F48D20">
                      <style type="text/css"> </style>
                      <path d="M389.486,226.898H122.515C54.852,226.898,0,281.746,0,349.413c0,67.659,54.852,122.514,122.515,122.514 c42.645,0,80.192-21.812,102.128-54.855h62.711c21.94,33.043,59.491,54.855,102.132,54.855 c67.667,0,122.514-54.855,122.514-122.514C512,281.746,457.153,226.898,389.486,226.898z M176.155,364.052h-37.794v37.778h-32.916 v-37.778H67.659v-32.928h37.786v-37.786h32.916v37.786h37.794V364.052z M358.495,363.774c-7.929,7.929-20.783,7.929-28.716,0 c-7.936-7.929-7.936-20.794,0-28.723c7.933-7.929,20.787-7.929,28.716-0.008C366.424,342.98,366.424,355.846,358.495,363.774z M403.84,409.127c-7.921,7.921-20.779,7.921-28.715-0.008c-7.937-7.929-7.937-20.786,0-28.715 c7.936-7.929,20.794-7.945,28.715-0.016C411.777,388.333,411.777,401.19,403.84,409.127z M403.84,318.422 c-7.921,7.929-20.779,7.929-28.715,0c-7.922-7.929-7.937-20.794,0-28.723c7.936-7.929,20.794-7.929,28.715,0 C411.777,297.627,411.777,310.493,403.84,318.422z M449.193,363.774c-7.921,7.929-20.786,7.929-28.724,0 c-7.937-7.929-7.937-20.794,0-28.723c7.937-7.929,20.802-7.929,28.724,0C457.122,342.98,457.122,355.846,449.193,363.774z"></path>{" "}
                      <path d="M268.928,110.894c0-2.46,0.49-4.72,1.361-6.802c1.319-3.116,3.548-5.8,6.337-7.69 c2.8-1.89,6.09-2.97,9.753-2.97c2.441,0,4.709,0.494,6.792,1.373c3.112,1.311,5.804,3.533,7.69,6.333 c1.882,2.8,2.97,6.086,2.97,9.756c0,5.893,1.207,11.593,3.39,16.753c3.282,7.744,8.724,14.293,15.588,18.928 c6.849,4.644,15.206,7.374,24.076,7.366c5.912,0,11.612-1.211,16.764-3.394c7.728-3.278,14.285-8.716,18.92-15.58 c4.644-6.857,7.367-15.21,7.367-24.073V40.073h-25.608v70.821c0,2.438-0.478,4.705-1.358,6.78c-1.319,3.124-3.556,5.808-6.333,7.69 c-2.807,1.881-6.093,2.969-9.753,2.969c-2.437,0-4.705-0.486-6.784-1.365c-3.12-1.311-5.804-3.548-7.69-6.333 c-1.886-2.8-2.97-6.1-2.986-9.742c0.016-5.924-1.192-11.616-3.378-16.768c-3.282-7.744-8.72-14.292-15.585-18.928 c-6.864-4.651-15.209-7.374-24.084-7.366c-5.908-0.008-11.604,1.203-16.764,3.394c-7.74,3.263-14.292,8.716-18.932,15.58 c-4.639,6.857-7.358,15.21-7.358,24.088v104.712h25.603V110.894z"></path>{" "}
                    </svg>
                  </div>

                  <div
                    className={profileTarget[2] ? `${Style.profile_icon} ${Style.hover}` : Style.profile_icon}
                    onMouseOver={() => mOver(2)}
                    onMouseLeave={() => mLeave()}
                  >
                    <svg fill="#399CA3" viewBox="0 0 16 16">
                      <path d="m9.539.613-3.9 14.55 1.209.324L10.746.937 9.54.612zm-5.63 3.434L.598 7.137a1.24 1.24 0 0 0 0 1.821l3.25 3.091.921-.85-3.321-3.15 3.321-3.112-.86-.89zm11.893 3.091-3.31-3.091-.861.91 3.32 3.091-3.32 3.111.92.85 3.251-3.05a1.242 1.242 0 0 0 0-1.821z"></path>
                    </svg>
                  </div>

                  <div
                    className={profileTarget[0] ? `${Style.profile_icon} ${Style.hover}` : Style.profile_icon}
                    onMouseOver={() => mOver(0)}
                    onMouseLeave={() => mLeave()}
                  >
                    <svg viewBox="0 0 512 512" fill="#F4BE1D" stroke="#F4BE1D">
                      <path
                        fill="#F4BE1D"
                        d="M255 22.31c-21.2 0-40.5 10.78-50.5 27.63l-4.4 7.42-7.6-4.08c-7.1-3.85-15.2-5.89-23.3-5.89-28.3 0-51.3 23.57-51.3 53.21 0 26.5 18.6 48.6 43.5 52.6l7.6 1.2v53.4c57.9-11.1 116-11.6 174 0v-69.7l4.8-2.6c15.7-8.3 26.1-26.1 26.1-46.15 0-28.8-20.7-51.12-45.4-51.12-6.5 0-13 1.61-18.9 4.72l-6.2 3.2-4.6-5.09C288 29.29 272 22.31 255 22.31zm1 194.79c-25.6 0-51.1 2.4-76.7 7-.9 6-1.3 12.2-1.3 18.6 0 29 9.2 55.2 23.6 73.7 14.4 18.5 33.5 29.3 54.4 29.3s40-10.8 54.4-29.3c14.4-18.5 23.6-44.7 23.6-73.7 0-6.4-.5-12.7-1.3-18.7-25.6-4.7-51.1-7-76.7-6.9zM208.7 348l-89.2 29.7-27.98 112H321.6L307.1 388l17.8-2.6 14.9 104.3h80.7l-28-112-89.2-29.7c-13.8 9.9-30 15.7-47.3 15.7-17.3 0-33.5-5.8-47.3-15.7zm69.3 52.7a9.999 9.999 0 0 1 10 10 9.999 9.999 0 0 1-10 10 9.999 9.999 0 0 1-10-10 9.999 9.999 0 0 1 10-10zm7 46a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10 10 10 0 0 1 10-10z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <figcaption className={specialOn ? `${Style.profile_info_container} ${Style.on}` : Style.profile_info_container}>
                <pre className={Style.profile_info}>
                  <b>
                    {info.title} <small>{info.korTitle}</small>
                  </b>
                  <br />
                  {info.content}
                </pre>
              </figcaption>
            </figure>
          </article>

          <div className={Style.life_graph}>
            <iframe width="100%" height="300" src="https://time.graphics/embed?v=1&id=787040" frameBorder="0" allowFullScreen></iframe>
          </div>
        </section>

        <section className={Style.archive_section}>
          <h2>Archive</h2>
          {Archive.map((arc) => {
            return (
              <article key={arc.name}>
                <Link className={Style.archive_a_deco} href={arc.href} target="_blank">
                  <figure>
                    <div className={Style.archive_logo_img_wrap}>
                      <svg viewBox={arc.viewbox}>
                        <path d={arc.path}></path>
                      </svg>
                      <span>{arc.name}</span>
                    </div>
                    <figcaption>
                      <p>{arc.href}</p>
                      <p>
                        <b>{arc.title}</b> 입니다.
                      </p>
                      <ul>
                        {arc.content.map((content, key) => {
                          return <li key={key}>{content}</li>;
                        })}
                      </ul>
                    </figcaption>
                  </figure>
                </Link>
              </article>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default About;
