import classes from "./Header.module.css";

export default function Header(props) {
  const { heading } = props;
  return (
    <div className={classes.header}>
      <h1>{heading}</h1>
    </div>
  );
}
