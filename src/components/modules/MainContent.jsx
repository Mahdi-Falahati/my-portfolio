"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TypeWriting from "@/elements/TypeWriting";
import devSrc from "@/public/Assets/RC.jpg";
import styles from "./mainContent.module.css";
import Image from "next/image";

export default function MainContent() {
  useEffect(() => {
    AOS.init({ duration: "1250" });
  }, []);

  return (
    <section
      className="flex flex-wrap justify-around items-center"
      style={{ height: "90vh" }}
    >
      <section data-aos="fade-right" className="w-1/2 md:w-1/3">
        <Image
          src={devSrc}
          className={styles.bgImage}
          title="Developer"
          alt="Developer"
        />
      </section>
      <section
        data-aos="fade-left"
        className="w-3/4 lg:w-1/2 xl:w-1/3 flex justify-center items-center flex-col"
      >
        <TypeWriting />
        <p
          data-aos="zoom-in-down"
          className="leading-6 text-wrap mt-4 px-3 font-thin sm:px-5 py-2 whitespace-nowrap sm:font-bold text-center bg-purple-950 text-white rounded-full"
        >
          JUNIOR [ FULL-STACK ] DEVELOPER
        </p>
        <p className="mt-3 px-3 border-x border-gray-400 text-center font-semibold tracking-widest text-gray-700 text-base">
          A developer with 2 years of recent focus on web development who is
          eager to learn new things and enjoy experiencing new challenges, Also
          interested in play chess
        </p>
        <section className="mt-8 flex justify-around items-center flex-wrap">
          <div className="mx-1">
            <a className={styles.btnPulse} href="#OpenSourceProjects">
              OpenSourceProjects
            </a>
          </div>
        </section>
      </section>
    </section>
  );
}
