import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

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
    <CustomLink href={"/product/" + product.name}>
      <Card
        hoverable
        style={{ width: 300 }}
        cover={
          <Image
            src={product.image}
            alt={product.title}
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
