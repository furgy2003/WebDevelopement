import classes from "./EventDetailContent.module.css";
import DateIcon from "../icons/DateIcon";
import AddressIcon from "../icons/AddressIcon";
// we use Image tag from Next.js instead of img from HTML because of optimization for operating
// system and search engine and image is only loaded upon request
import Image from "next/image";

export default function EventDetailContent(props) {
  const { image, description, location, date } = props;

  const readableDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const readableLocation = location.replace(",", "\n");

  return (
    <div className={classes.container}>
      <div className={classes.circle_img}>
        <Image src={"/" + image} width={200} height={200} />
      </div>
      {/* <img className={classes.circle_img} src={"/" + image} /> */}
      <div className={classes.content}>
        <p>
          <span className={classes.icon}>
            <DateIcon />
          </span>
          {readableDate}
        </p>
        <p>
          <span className={classes.icon}>
            <AddressIcon />
          </span>
          {readableLocation}
        </p>
      </div>
    </div>
  );
}
