import RC from "@/public/Assets/RC0.png";
import { GiEvilBook, GiWorld, GiWerewolf } from "react-icons/gi";
import CardAnimation from "@/elements/CardAnimation";
import SocialMedia from "@/elements/SocialMedia";
import { SocialMedias } from "@/constant/SocialMedias";

export default function AboutMe({ educations }) {
  return (
    <section className="mt-3 pt-1 px-1 sm:px-16">
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-around">
        <p className="bg-orange-600 rounded w-5/6 sm:w-1/3 h-1"></p>
        <h1
          id="AboutMe"
          className="text-center my-2 sm:my-0 text-3xl font-bold"
        >
          ABOUT ME
        </h1>
        <p className="bg-cyan-500 rounded w-5/6 sm:w-1/3 h-1 "></p>
      </div>
      <section className="mt-12 h-full flex flex-wrap justify-around align-center">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="mb-5 md:my-5"
        >
          <CardAnimation
            title="My hobbies are...."
            habbies={habbies}
            img={{
              alt: "RC",
              title: "RC",
              src: RC,
            }}
          />
          <div className="md:px-4 px-1 w-full my-5 flex flex-wrap justify-around">
            {SocialMedias?.map((item, id) => (
              <SocialMedia
                link={item.link}
                icon={item.icon}
                key={id}
                title={item.title}
              />
            ))}
          </div>
        </div>
        <section
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="sm:px-4 px-1 w-full sm:w-96 my-5"
        >
          <h1 className="font-bold text-left mb-4">
            EDUCATION
            <GiEvilBook className="ml-2 inline" />
          </h1>
          <section>
            {educations?.map((item, id) => {
              return (
                <div key={id} className="my-3 py-1 border-b border-gray-300">
                  <h2
                    className={`font-bold ${
                      item.color ? item.color : "text-info"
                    } tracking-widest`}
                  >
                    <p>- {item.title}</p>
                  </h2>
                  <p className="font-medium text-gray-400 text-sm">
                    {item.description}
                  </p>
                  <p className="font-medium flex items-center text-gray-500 text-sm">
                    <GiWorld className="inline mr-1" />
                    {item.location}
                  </p>
                </div>
              );
            })}
          </section>
        </section>
      </section>
      <section
        className="mb-16 mt-3 flex flex-wrap justify-between"
        data-aos="zoom-in-down"
      >
        <div className="md:px-4 px-2 w-full tracking-widest text-sm font-bold text-gray-500 text-left md:text-justify">
          <GiWerewolf className="mr-2 inline text-3xl text-black" />
          <span className="text-sm text-black">As a front-end developer</span>
          <p className="mb-2">
            fluent in React, Redux, Redux Toolkit, React Router DOM, MUI, and
            TailwindCSS, I have a strong foundation in building dynamic and
            responsive user interfaces. My experience in these technologies has
            allowed me to develop a deep understanding of the React ecosystem
            and its best practices. I am skilled in developing reusable
            components, managing state using Redux, and routing using React
            Router DOM. Additionally, I have experience working with Material UI
            (MUI) and TailwindCSS, two popular UI libraries, to create visually
            appealing and responsive designs.
          </p>
          <p>
            In addition to my expertise in React, I am also familiar with
            Next.js, a popular React framework. My familiarity with Next.js has
            allowed me to build performant and scalable applications that are
            optimized for search engines .
          </p>
        </div>
      </section>
    </section>
  );
}

const habbies = [
  "Play chess",
  "Write code & Read the source code",
  "Listen to music",
  "Go to Gym",
  "Listen to the podcast",
];
