import classes from "./EventDetailHeader.module.css";

export default function EventDetailHeader({ title }) {
  return (
    <div className={classes.header}>
      <h1>{title}</h1>
    </div>
  );
}
