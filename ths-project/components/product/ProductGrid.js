import { Row, Col } from "antd";
import ProductCard from "./ProductCard";
import { styled } from "styled-components";

const CustomRow = styled(Row)`
  & {
    padding-top: 4rem;
  }
`;

export default function ProductGrid(props) {
  const { products } = props;

  return (
    <CustomRow justify="center" gutter={[32, 32]}>
      {products.map((product) => {
        return (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        );
      })}
    </CustomRow>
  );
}
