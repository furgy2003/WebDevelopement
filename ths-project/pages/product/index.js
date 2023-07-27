// react-next
import { Fragment, useState } from "react";
import Head from "next/head";

// components
import Header from "@/components/ui/header/Header";
import ProductGrid from "@/components/product/ProductGrid";
import Wrapper from "@/components/ui/wrapper/Wrapper";
import ProductSearch from "@/components/product-search-bar/ProductSearch";
import ProductFilterDrawer from "@/components/product-search-bar/ProductFilterDrawer";

export default function ProductsPage() {
  const [open, setOpen] = useState(false);

  function filterHandler() {
    setOpen(true);
  }

  function closeFilterHandler() {
    setOpen(false);
  }

  return (
    <Fragment>
      <Head>
        <title>Products</title>
        <meta name="description" content="information about products" />
      </Head>
      <Header>Products</Header>
      <Wrapper>
        <ProductSearch filterHandler={filterHandler} />
        <ProductGrid />
      </Wrapper>
      <ProductFilterDrawer
        open={open}
        closeFilterHandler={closeFilterHandler}
      />
    </Fragment>
  );
}
