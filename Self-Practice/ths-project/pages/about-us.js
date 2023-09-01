import { Fragment } from "react";
import Header from "@/components/ui/header/Header";
import AboutInfo from "@/components/home/AboutInfo";
import Wrapper from "@/components/ui/wrapper/Wrapper";
import Head from "next/head";

export default function AboutPage() {
  return (
    <Fragment>
      <Head>
        <title>About Us</title>
        <meta name="description" content="general information" />
      </Head>
      <Header>About Us</Header>
      <Wrapper>
        <AboutInfo />
      </Wrapper>
    </Fragment>
  );
}
