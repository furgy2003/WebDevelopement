import Link from "next/link";
import classes from "./PostItem.module.css";
import Image from "next/image";

export default function PostItem(props) {
  const { title, image, excerpt, date, slug } = props;
  const imagePath = `/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  const formatDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image src={imagePath} alt={title} width={300} height={200} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formatDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
