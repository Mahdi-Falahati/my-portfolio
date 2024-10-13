import Image from "next/image";

export default function SocialMedia({ icon, link, height, title }) {
  return (
    <a href={link} className="flex flex-col items-center w-[80px]">
      <Image
        src={icon}
        width={"w-fit"}
        height={"auto"}
        alt="title"
        className={`${height || "h-12"} hover:animate-bounce animate-pulse`}
      />
      <span className="text-gray-400 text-sm font-bold mt-2">{title}</span>
    </a>
  );
}
