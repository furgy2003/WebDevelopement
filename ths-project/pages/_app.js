import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import StyledComponentsRegistry from "@/lib/registry";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <StyledComponentsRegistry>
        <Component {...pageProps} />
      </StyledComponentsRegistry>
    </Layout>
  );
}
