import AboutMe from "@/modules/AboutMe";
import MainContent from "@/modules/MainContent";

export default function HomePage({ data }) {
  return (
    <>
      <MainContent />
      <AboutMe educations={data} />
    </>
  );
}
