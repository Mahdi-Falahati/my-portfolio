import AboutMe from "@/modules/AboutMe";
import MainContent from "@/modules/MainContent";
import Skills from "@/modules/Skills";

export default function HomePage({ data }) {
  return (
    <>
      <MainContent />
      <AboutMe educations={data} />
      <Skills />
    </>
  );
}
