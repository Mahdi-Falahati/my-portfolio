import Educations from "@/models/Educations";
import HomePage from "@/templates/HomePage";
import connectDB from "@/utils/connectDB";

export default async function Home() {
  try {
    await connectDB();
    const educations = await Educations.find({});
    return <HomePage data={educations} />;
  } catch (error) {
    return (
      <p className="text-center italic text-red-500 tracking-wider font-semibold text-2xl">
        The something wrong is happen...
      </p>
    );
  }
}
