import styles from "./typeWriting.module.css";
import { GiDelighted } from "react-icons/gi";

export default function TypeWriting({ text }) {
  return (
    <p
      className={
        styles.typewriter +
        " px-0 py-2 sm:p-2 border-y border-dotted border-gray-500"
      }
    >
      {text}
      {!text && (
        <>
          I{`'`}m
          <GiDelighted className="mx-0 sm:mx-2 inline text-red-600" />
          <span className="text-red-900">Mahdi-Falahati</span>
        </>
      )}
    </p>
  );
}
