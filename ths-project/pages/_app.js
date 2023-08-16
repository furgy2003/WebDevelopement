// react-next
import "@/styles/globals.css";
import Head from "next/head";
import StyledComponentsRegistry from "@/lib/registry";

// components
import Layout from "@/components/layout/Layout";
import { ConfigProvider } from "antd";

export default function App({ Component, pageProps }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#54B435",
        },
      }}
    >
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
    </ConfigProvider>
  );
}
