// react-next
import { styled } from "styled-components";

// components
import ProductSwiper from "../product-swiper/product-info/ProductSwiper";

// helpers
import { getAllProducts } from "@/lib/helpers/product-util";

const CustomDiv = styled.div`
  & {
    margin-top: 4rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .slick-list {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export default function ProductInfo() {
  const products = getAllProducts();
  return (
    <CustomDiv>
      <h1>Product</h1>
      <ProductSwiper products={products} />
    </CustomDiv>
  );
}
