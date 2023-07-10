import classes from "./EventItem.module.css";
import Button from "../ui/Button";
import AddressIcon from "../icons/AddressIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import DateIcon from "../icons/DateIcon";
import Image from "next/image";

export default function EventDetail(props) {
  const { item } = props;

  const readableDate = new Date(item.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const readableLocation = item.location.replace(",", "\n");
  const linkLocation = `/events/${props.item.id}`;

  return (
    <li key={item.id} className={classes.event_card}>
      <div className={classes.event_img}>
        <Image src={"/" + item.image} width={200} height={200} />
      </div>
      <div className={classes.content}>
        <h2>{item.title}</h2>
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
        <div className={classes.action}>
          {/* Here we use a Link and not a Button because we do not need to submit or store any data */}
          <Button link={linkLocation}>
            Explore Event
            <div className={classes.icon}>
              <ArrowRightIcon />
            </div>
          </Button>
        </div>
      </div>
    </li>
  );
}
