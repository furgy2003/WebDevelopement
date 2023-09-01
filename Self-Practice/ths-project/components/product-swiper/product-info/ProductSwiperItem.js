// react-next
import Link from "next/link";
import { styled } from "styled-components";

// components
import Image from "next/image";

const CustomLink = styled(Link)`
  .img {
    overflow: visible !important;
  }
`;

export default function ProductSwiperItem(props) {
  const { product } = props;
  return (
    <CustomLink href={"/product/" + product.id}>
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={300}
        className="img"
      />
    </CustomLink>
  );
}
