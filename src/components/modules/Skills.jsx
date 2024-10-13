import { GiBlackHoleBolas } from "react-icons/gi";

import css from "@/Icons/css.svg";
import html from "@/Icons/html.svg";
import figma from "@/Icons/figma.svg";
import jest from "@/Icons/jest.svg";
import js from "@/Icons/js.svg";
import mongodb from "@/Icons/mongodb.svg";
import nextjs from "@/Icons/nextjs.svg";
import nodejs from "@/Icons/nodejs.svg";
import python from "@/Icons/python.svg";
import reactRouterDom from "@/Icons/react-router-dom.svg";
import reactjs from "@/Icons/reactjs.svg";
import tailwindcss from "@/Icons/tailwindcss.svg";
import redux from "@/Icons/redux.svg";
import git from "@/Icons/git.svg";
import mui from "@/Icons/mui.svg";
import Slider from "@/elements/Slider";

export default function Skills() {
  return (
    <div className="bg-purple-900 pt-8 pb-1">
      <section className="flex justify-center items-center border-b border-white pb-3">
        <h2 className="text-center tracking-widest	 text-white text-3xl font-bold">
          SKILLS
        </h2>
        <GiBlackHoleBolas className="ml-5 text-white text-3xl" />
      </section>
      <section>
        <section className=" my-8 flex justify-around items-center flex-wrap">
          <div className="py-5 px-2 rounded-2xl mb-5 w-11/12 md:w-1/2 bg-white">
            <Slider
              Logos={advance}
              aniamte="animate-pulse"
              hoverAniamte="animate-bounce"
              height="h-14"
              slidesPerView={4}
            />
          </div>
          <div className="py-5 px-2 rounded-2xl mb-5 w-11/12 md:w-1/3 bg-white">
            <Slider
              Logos={base}
              height="h-14"
              delay="3000"
              slidesPerView={4}
              aniamte="animate-pulse"
              hoverAniamte="animate-bounce"
            />
          </div>
        </section>
      </section>
    </div>
  );
}

const base = [
  { logo: html, title: "HTML5" },
  { logo: css, title: "CSS3" },
  { logo: tailwindcss, title: "tailwindcss" },
  { logo: js, title: "JavaScript" },
  { logo: python, title: "Python" },
  { logo: figma, title: "Figma" },
  { logo: git, title: "Git" },
];

const advance = [
  { logo: reactjs, title: "ReactJS" },
  { logo: redux, title: "Redux" },
  { logo: mui, title: "MUI" },
  { logo: reactRouterDom, title: "ReactRouterDom" },
  { logo: jest, title: "JEST" },
  { logo: nodejs, title: "NodeJS" },
  { logo: nextjs, title: "NextJS" },
  { logo: mongodb, title: "Mongodb" },
];
