// react-next
import Link from "next/link";
import { styled } from "styled-components";

// components
import { Card } from "antd";
import Image from "next/image";

const CustomLink = styled(Link)`
  & {
    text-decoration: none;
  }

  .img {
    width: 300;
    height: auto;
  }
`;

export default function ProductCard(props) {
  const { product } = props;

  return (
    <CustomLink href={"/product/" + product.id}>
      <Card
        hoverable
        style={{ width: 300 }}
        cover={
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="img"
          />
        }
      >
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </Card>
    </CustomLink>
  );
}
