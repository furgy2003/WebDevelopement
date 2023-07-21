import Header from "@/components/ui/header/Header";
import ContactForm from "@/components/contact-form/ContactForm";
import { Fragment } from "react";

export default function ContactPage() {
  return (
    <Fragment>
      <Header heading="Contacts" />
      <ContactForm />
    </Fragment>
  );
}
