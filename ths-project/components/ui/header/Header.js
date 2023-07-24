import classes from "./Header.module.css";

export default function Header(props) {
  return (
    <div className={classes.header}>
      <h1>{props.children}</h1>
    </div>
  );
}
