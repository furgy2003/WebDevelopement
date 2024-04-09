import { Fragment } from "react";
import Link from "next/link";
import classes from "./NavigationBar.module.css";
import Logo from "./Logo";

export default function NavigationBar() {
  return (
    <header className={classes.header}>
      <Logo />
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
