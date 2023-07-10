import classes from "./PostHeader.module.css";
import Image from "next/image";

export default function PostHeader(props) {
  const { title, image } = props;
  const imageSlug = image.replace(/\.[^/.]+$/, "");
  const imagePath = `/posts/${imageSlug}/${image}`;
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={imagePath} alt={title} width={200} height={150} />
    </header>
  );
}
