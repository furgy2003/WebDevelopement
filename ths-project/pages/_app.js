import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import StyledComponentsRegistry from "@/lib/registry";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="steel" />
        <link rel="icon" href="/img/company/ths-logo.png" />
      </Head>
      <StyledComponentsRegistry>
        <Component {...pageProps} />
      </StyledComponentsRegistry>
    </Layout>
  );
}
