import Header from "@/components/ui/header/Header";
import ContactForm from "@/components/contact-form/ContactForm";
import Location from "@/components/location/Location";
import Wrapper from "@/components/ui/wrapper/Wrapper";
import { Fragment } from "react";

export default function ContactPage() {
  return (
    <Fragment>
      <Header>Contact</Header>
      <Wrapper>
        <Location />
        <ContactForm />
      </Wrapper>
    </Fragment>
  );
}
