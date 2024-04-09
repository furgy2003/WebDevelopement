import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import Head from "next/head";
import { NotificationProvider } from "@/source/NotificationContext";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NotificationProvider>
        <Component {...pageProps} />
      </NotificationProvider>
    </Layout>
  );
}
