// react-next
import { styled } from "styled-components";

// components
import { Row, Col } from "antd";
import ProductCard from "./ProductCard";

// helpers
import { getAllProducts } from "@/lib/helpers/product";

const CustomRow = styled(Row)`
  & {
    padding-top: 4rem;
  }
`;

export default function ProductGrid() {
  const products = getAllProducts();
  return (
    <CustomRow gutter={[32, 32]}>
      {products.map((item) => {
        return (
          <Col key={item.id}>
            <ProductCard product={item} />
          </Col>
        );
      })}
    </CustomRow>
  );
}
