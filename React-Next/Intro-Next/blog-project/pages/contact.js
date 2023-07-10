import ContactForm from "@/components/contact/ContactForm";
import { Fragment } from "react";
import Head from "next/head";

export default function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact us" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}
