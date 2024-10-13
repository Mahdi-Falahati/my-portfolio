import { FaCopyright, FaTelegram } from "react-icons/fa6";
import call from "@/public/Assets/Icons/call.svg";
import email from "@/public/Assets/Icons/email.svg";
import Image from "next/image";

export default function MainFooter() {
  return (
    <section
      id="ContactME"
      className="flex flex-wrap justify-center md:justify-around my-5 border-t border-gray-400 pt-5 border-solid"
    >
      <a href="tel:+989021571617" className="flex justify-center items-center">
        <Image src={call} alt="phone" className="h-10 mr-2 w-fit" />
        My Phone Number
      </a>
      <a
        href="mailto:falahatimahdi01@gmail.com"
        className="md:my-0 my-2 flex items-center justify-center"
      >
        <Image src={email} alt="email" className="h-10 mr-2 w-fit" />
        My Email
      </a>
      <p className="md:w-[250px] w-full md:mb-0 mb-2 flex items-center justify-center">
        <FaCopyright className="text-2xl inline-block mr-2 w-fit" />
        Created By
        <a
          href="https://telegram.me/Mahdi_Falahatii"
          className="ml-2 border-b border-gray-400 hover:animate-pulse font-bold italic"
        >
          Mahdi-Falahati
          <FaTelegram className="inline-block ml-2 w-fit" />
        </a>
      </p>
    </section>
  );
}
