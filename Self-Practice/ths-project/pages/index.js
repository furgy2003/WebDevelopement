import AboutInfo from "@/components/home/AboutInfo";
import Opening from "@/components/home/Opening";
import ProductInfo from "@/components/home/ProductInfo";
import Wrapper from "@/components/ui/wrapper/Wrapper";
import { Fragment } from "react";
import Head from "next/head";

export default function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
        <meta name="description" content="general information" />
      </Head>
      <Opening />
      <Wrapper>
        <AboutInfo />
        <ProductInfo />
      </Wrapper>
    </Fragment>
  );
}
