import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import classes from "./ProductCard.module.css";

export default function ProductCard(props) {
  const { product } = props;

  return (
    <Link className={classes.card} href={"/product/" + product.name}>
      <Card
        hoverable
        style={{ width: 300 }}
        cover={
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
            className={classes.img}
          />
        }
      >
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </Card>
    </Link>
  );
}
