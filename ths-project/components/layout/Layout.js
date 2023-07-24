import { Fragment } from "react";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import ContactButton from "../contact-button/ContactButton";

export default function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      {props.children}
      <ContactButton />
      <Footer />
    </Fragment>
  );
}
