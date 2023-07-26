import AboutInfo from "@/components/home/AboutInfo";
import ProductInfo from "@/components/home/product-info/ProductInfo";
import Wrapper from "@/components/ui/wrapper/Wrapper";
import { Fragment } from "react";

export default function HomePage() {
  return (
    <Fragment>
      <h1>Hello</h1>
      <Wrapper>
        <AboutInfo />
        <ProductInfo />
      </Wrapper>
    </Fragment>
  );
}
