import Header from "@/components/ui/header/Header";
import ContactForm from "@/components/contact-form/ContactForm";
import Location from "@/components/location/Location";
import Wrapper from "@/components/ui/wrapper/Wrapper";
import { Fragment } from "react";
import Head from "next/head";

export default function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="contact pagge contains the the map and form"
        />
      </Head>
      <Header>Contact</Header>
      <Wrapper>
        <Location />
        <ContactForm />
      </Wrapper>
    </Fragment>
  );
}
