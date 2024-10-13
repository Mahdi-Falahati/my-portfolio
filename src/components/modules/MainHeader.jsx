import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";

import styles from "./MainHeader.module.css";
import {
  GiBarracksTent,
  GiBandit,
  GiBubblingFlask,
  GiAnglerFish,
} from "react-icons/gi";
import Logo from "@/public/Assets/Icons/Logo.png";

export default function MainHeader() {
  return (
    <nav className="relative border-b border-gray-300 h-16 flex items-center">
      <input type="checkbox" id="nav-toggle" className={styles.checkbox} />
      <label htmlFor="nav-toggle" className={styles.button}>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul className={styles.header_items}>
        {navItems?.map(({ name, icon, href }, id) => {
          return (
            <li key={id} className={headerItem}>
              <Link href={href} className="flex items-center text-xl">
                <span className="mr-1">{icon}</span>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="ml-[auto] px-3.5">
        <Link href="/" className="cursor-pointer">
          <Image src={Logo} alt="Mahdi-Falahati(RC)" priority={true} />
        </Link>
      </div>
    </nav>
  );
}

const navItems = [
  {
    name: "Home",
    href: "#",
    icon: <GiBarracksTent className="mr-1 text-green-900" />,
  },
  {
    name: "Projects",
    href: "#OpenSourceProjects",
    icon: <GiBubblingFlask className="mr-1 text-purple-900" />,
  },
  {
    name: "About ME",
    href: "#AboutMe",
    icon: <GiBandit className="mr-1 text-red-700" />,
  },
  {
    name: "Contact ME",
    href: "#ContactME",
    icon: <GiAnglerFish className="mr-1 text-blue-900" />,
  },
];
const headerItem = classNames(
  "mx-3",
  "font-bold",
  "text-center",
  "whitespace-nowrap",
  "cursor-pointer",
  "hover:opacity-75"
);
