import Header from "@/components/ui/header/Header";
import ContactForm from "@/components/contact-form/ContactForm";
import Location from "@/components/location/Location";
import { Fragment } from "react";

export default function ContactPage() {
  return (
    <Fragment>
      <Header>Contact</Header>
      <Location />
      <ContactForm />
    </Fragment>
  );
}
