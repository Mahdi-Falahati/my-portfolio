import Image from "next/image";
import styles from "./cardAnimation.module.css";

export default function CardAnimation({ title, habbies, img }) {
  return (
    <section className={styles.card}>
      <main className={styles.card_image}>
        <div className="py-3">
          <h4 className="text-center uppercase text-yellow-400 font-bold tracking-widest">
            {title}
          </h4>
        </div>
        <hr />
        <ul className="px-10 py-3 text-white list-disc">
          {habbies?.map((item, id) => {
            return (
              <li className="mb-3 tracking-widest" key={id}>
                {item}
              </li>
            );
          })}
        </ul>
      </main>
      <div className={styles.card_description}>
        <div className={styles.RCImg}>
          <Image
            src={img.src}
            title={img.title}
            alt={img.alt}
            width={"auto"}
            height={"auto"}
            className="bg-gray-200"
          />
        </div>
      </div>
    </section>
  );
}
