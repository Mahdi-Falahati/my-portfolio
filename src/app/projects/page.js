import ProjectsPage from "@/templates/ProjectsPage";
import Projects from "@/models/Projects";
import connectDB from "@/utils/connectDB";

export default async function OpenSourceProjects() {
  try {
    await connectDB();
    const projects = await Projects.find({});
    return <ProjectsPage projects={projects} />;
  } catch (error) {
    return (
      <p className="text-center italic text-red-500 tracking-wider font-semibold text-2xl">
        The something wrong is happen...
      </p>
    );
  }
}
