import classes from "./MeetUpCard.module.css";
import Card from "../ui/Card";
import FavouriteContext from "../../store/favourite-context";
import { useContext } from "react";

export default function MeetUpCard(props) {
  const favouriteItems = useContext(FavouriteContext);

  const isItemFav = favouriteItems.isFav(props.id);
  function toggleFavouriteHandler() {
    if (!isItemFav) {
      favouriteItems.addFav({
        id: props.id,
        title: props.title,
        address: props.address,
        image: props.image,
        description: props.description,
      });
    } else {
      favouriteItems.removeFav(props.id);
    }
  }

  return (
    <li className={classes.card_list} key={props.id}>
      <Card>
        <div>
          <img src={props.image} alt={props.title} />
          <h1>{props.title}</h1>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div>
          <button onClick={toggleFavouriteHandler}>
            {isItemFav ? "Remove from Favourite" : "To Favourite"}
          </button>
        </div>
      </Card>
    </li>
  );
}
