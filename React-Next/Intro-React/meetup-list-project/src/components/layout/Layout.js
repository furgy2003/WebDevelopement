import classes from "./Layout.module.css";
import NavigationBar from "./NavigationBar";

export default function Layout(props) {
  return (
    <>
      <NavigationBar />
      <div className={classes.layer}>{props.children}</div>
    </>
  );
}
