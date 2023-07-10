import classes from "./Logo.module.css";
import Link from "next/link";

export default function Logo() {
  return (
    <div className={classes.logo}>
      <Link href="/">Next Blog</Link>
    </div>
  );
}
