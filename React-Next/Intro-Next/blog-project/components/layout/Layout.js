import { Fragment } from "react";
import NavigationBar from "./NavigationBar";

export default function Layout(props) {
  return (
    <Fragment>
      <NavigationBar />
      <main>{props.children}</main>
    </Fragment>
  );
}
