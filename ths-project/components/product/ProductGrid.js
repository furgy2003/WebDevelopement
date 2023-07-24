import { Row, Col } from "antd";
import ProductCard from "./ProductCard";
import classes from "./ProductGrid.module.css";

export default function ProductGrid(props) {
  const { products } = props;

  return (
    <Row justify="center" gutter={[32, 32]} className={classes.row}>
      {products.map((product) => {
        return (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        );
      })}
    </Row>
  );
}
