import Link from "next/link";
import Image from "next/image";
import classes from "./ContactButton.module.css";

export default function ContactButton() {
  return (
    <a
      href="http://www.tekhengsteel.com/"
      target="_blank"
      className={classes.link}
    >
      <Image src="/icon/line-icon.png" alt="Line" width={40} height={40} />
    </a>
  );
}
