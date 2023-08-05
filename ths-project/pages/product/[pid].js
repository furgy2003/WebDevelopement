// react-next
import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

// component
import Header from "@/components/ui/header/Header";
import ProductDescription from "@/components/product-description/ProductDescription";
import Wrapper from "@/components/ui/wrapper/Wrapper";
import ProductSwiper from "@/components/product-swiper/product-info/ProductSwiper";
import ProductNotFound from "@/components/product-description/ProductNotFound";
import ProductTab from "@/components/product-description/ProductTab";

// helpers
import {
  getFeaturedProducts,
  getProductById,
} from "@/lib/helpers/product-util";

export default function SpecificProduct() {
  const router = useRouter();
  const id = router.query.pid;
  const product = getProductById(id);
  const featuredProducts = getFeaturedProducts();

  return (
    <Fragment>
      <Head>
        <title>Products</title>
        <meta name="description" content="information about products" />
      </Head>
      {!product && (
        <Fragment>
          <ProductNotFound />
        </Fragment>
      )}
      {product && (
        <Fragment>
          <Header>{product.name}</Header>
          <Wrapper>
            <ProductDescription product={product} />
            <ProductTab />
            <ProductSwiper products={featuredProducts} />
          </Wrapper>
        </Fragment>
      )}
    </Fragment>
  );
}
