import styles from "./card.module.css";
import { GiWarlockEye } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Card({ img, link, title, tecnologhy, description }) {
  return (
    <div className={`my-5 mx-1 w-96 shadow-2xl rounded-md ${styles.card}`}>
      <div className="flex justify-center w-full border-b border-gray-500">
        <Image
          src={`data:image/jpeg;base64,${img}`}
          alt={title}
          width={800}
          height={600}
          className="w-fit h-[230px]"
        />
      </div>
      <div className="py-4 px-2">
        <h3 className="font-bold pl-2">- {title}</h3>
        <ul className="text-gray-400 pt-3 flex flex-wrap justify-between items-center">
          {tecnologhy?.map((tec, id) => (
            <li
              key={id}
              className="border mx-1 my-3 border-gray-400 rounded-md px-3"
            >
              {tec}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.cardSummary}>
        <p className="flex justify-center items-center leading-7 text-xl text-justify">
          {description}
        </p>
        <div className="flex justify-around">
          {link.live && (
            <a
              href={link.live}
              className="hover:animate-bounce border rounded-md px-3 py-2 hover:bg-white hover:text-black"
            >
              <GiWarlockEye className="inline-block text-3xl" /> Live
            </a>
          )}
          <a
            href={link.code}
            className="hover:animate-bounce border rounded-md px-3 py-2 hover:bg-white hover:text-black"
          >
            <FaGithub className="inline-block text-3xl" /> Code
          </a>
        </div>
      </div>
    </div>
  );
}
