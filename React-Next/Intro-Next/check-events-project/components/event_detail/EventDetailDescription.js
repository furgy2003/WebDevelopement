import classes from "./EventDetailDescription.module.css";

export default function EventDetailDescription(props) {
  return <section className={classes.description}>{props.children}</section>;
}
