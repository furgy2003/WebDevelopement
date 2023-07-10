import Link from "next/link";
import classes from "./MainHeader.module.css";

export default function MainHeader() {
  return (
    <header className={classes.nav_header}>
      <div className={classes.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <div className={classes.browse}>
        <Link href="/events">Browse All Events</Link>
      </div>
    </header>
  );
}
