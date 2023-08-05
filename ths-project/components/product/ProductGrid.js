// react-next
import { styled } from "styled-components";

// components
import { Row, Col } from "antd";
import ProductCard from "./ProductCard";

// helpers
import { getAllProducts } from "@/lib/helpers/product-util";

const CustomRow = styled(Row)`
  & {
    padding-top: 4rem;
  }

  .card {
    padding-bottom: 1rem;
  }
`;

export default function ProductGrid() {
  const products = getAllProducts();
  return (
    <CustomRow justify="center">
      <Col xs={24} sm={24} md={24} lg={18}>
        <Row gutter={[56, 32]} justify="center">
          {products.map((item) => {
            return (
              <Col className="card">
                <ProductCard key={item.id} product={item} />
              </Col>
            );
          })}
        </Row>
      </Col>
    </CustomRow>
  );
}
