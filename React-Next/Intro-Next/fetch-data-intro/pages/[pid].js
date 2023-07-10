// STATIC DYNAMIC PAGE //

import { Fragment } from "react";

import fs from "fs/promises";
import path from "path";

export default function ProductDetail(props) {
  const { loadedProduct } = props;
  // when fallback is set to true, need to display loading while waiting for the data fetching
  // when fallback is false or "blocking", this if statement is not needed
  if (!loadedProduct) {
    return <p>Loading ...</p>;
  }

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

// getStaticProps comes with the default context object that contain information ex. of url params
export async function getStaticProps(context) {
  // destructure the context to access the params, we use context to access url params
  // instead of Router because the getStaticProps is ran on the server side and hence the url
  // link has not been set on the client side (Router extract from the client side)
  const { params } = context;
  const productID = params.pid;

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const productItem = data.products.find((product) => productID === product.id);

  return {
    props: {
      loadedProduct: productItem,
    },
  };
}

// since the page is dynamic, the server do not know which page has to be prerender, therefore
// need the getStaticPaths func to tell which page to prerender
// getStaticPaths is a special func which return an object where path specify to-be-prerender-page
// use for incrementally pregenerated static page
export async function getStaticPaths() {
  return {
    // specified the pregenerated page
    paths: [
      { params: { pid: "p1" } },
      // { params: { pid: "p2" } },
      // { params: { pid: "p3" } },
    ],
    // 1) when fallback is false, the only pages that are allowed to be visited are the one that
    // have been prerender, any pages other than the one prerender will result in 404 error
    // 2) when fallback is true, pages that are not prerender can be render upon called, however
    // for non-prerender page, data needed to fetch, therefore need to render something while waiting
    // for the fetch to be complete, like the loading page, else Next.js will try to render
    // something that is not yet available/ fetched
    // 3) when fallback is "blocking", the page will not render unless the fetch finished, this mean that
    // we no need to have loading page, but also implies will take longer time waiting for the page data
    // to be fetched
    fallback: "blocking",
  };
}
