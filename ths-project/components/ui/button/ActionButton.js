import classes from "./ActionButton.module.css";

export default function ActionButton(props) {
  return <button className={classes.btn}>{props.children}</button>;
}
