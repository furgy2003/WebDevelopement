// react-next
import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

// components
import { Card } from "antd";

export default function ProductCard(props) {
  const { product } = props;

  const CustomLink = styled(Link)`
    & {
      text-decoration: none;
    }

    .img {
      width: 300;
      height: auto;
    }
  `;

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
