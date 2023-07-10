// _app.js is the special file in Next.js that act as the root or entry to the application
// use to apply application wide functionality or design
import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import Head from "next/head";
import { NoticationProvider } from "@/source/NotificationContext";

export default function App({ Component, pageProps }) {
  return (
    <NoticationProvider>
      <Layout>
        {/* Head is a special tag used to inject all enclosed tags in the head section of the html */}
        {/* Note the the general Head will be overwrite by the more specific one (or the closer one) */}
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Next Event</title>
          <meta name="description" content="explore events" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NoticationProvider>
  );
}
