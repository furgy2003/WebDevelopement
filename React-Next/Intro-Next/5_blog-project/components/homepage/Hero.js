import classes from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <h1>Welcome to the Blog!</h1>
      <p>Author: Max</p>
      <div className={classes.image}>
        <Image
          src="/image/max.png"
          alt="author's photo"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}
