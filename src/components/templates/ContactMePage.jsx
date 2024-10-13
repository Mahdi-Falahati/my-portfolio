import SocialMedia from "@/elements/SocialMedia";
import { SocialMedias } from "@/constant/SocialMedias";
import { RiMailSendLine } from "react-icons/ri";

export default function ContactMePage() {
  return (
    <div className="flex flex-col justify-around min-h-[70vh]">
      <div>
        <h1 className="text-center text-3xl sm:text-6xl font-semibold tracking-wider italic">
          {`Let's Contact Me `}
          <span className="text-red-600">.</span>
        </h1>
        <p className="text-center tracking-widest font-semibold">
          easy to contact
        </p>
      </div>
      <section className="flex justify-around my-10 flex-wrap">
        {SocialMedias?.map((item, id) => (
          <SocialMedia
            link={item.link}
            icon={item.icon}
            key={id}
            title={item.title}
          />
        ))}
      </section>
      <p className="flex items-center justify-center text-xl md:text-2xl font-semibold tracking-widest text-indigo-800">
        <RiMailSendLine className="mr-2" />
        <a href="mailto:someone@example.com">Send email to me</a>
      </p>
    </div>
  );
}
