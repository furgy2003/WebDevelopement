// react-next
import { styled } from "styled-components";

// components
import { Col, Row } from "antd";
import Image from "next/image";

const CustomRow = styled(Row)`
  .description {
    padding-top: 1rem;
  }

  .description h1 {
    margin: 0.5rem;
  }
`;

export default function ProductDescription(props) {
  const { product } = props;
  return (
    <CustomRow justify="center" gutter={[12, 12]}>
      <Col xs={24} sm={24} md={12} lg={9}>
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={400}
        />
      </Col>
      <Col className="description" xs={24} sm={24} md={12} lg={9}>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </Col>
    </CustomRow>
  );
}
