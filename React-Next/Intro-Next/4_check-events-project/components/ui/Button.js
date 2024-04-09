import Link from "next/link";
import classes from "./Button.module.css";

export default function Buttton(props) {
  // Link and button can be use to serve the same purpose but slight difference in the
  // way we use it

  // Link when user is just viewing/ reading the page
  if (props.link) {
    return (
      <Link className={classes.btn} href={props.link}>
        {props.children}
      </Link>
    );
  }

  // button when user is changing either the frontend/ backend i.e. involves storing some
  // value inside the variable and using it later
  return (
    <button className={classes.btn} onClick={props.clickHandler}>
      {props.children}
    </button>
  );
}
