import { useContext } from "react";
import FavouriteContext from "../store/favourite-context";
import MeetUpList from "../components/meetups/MeetUpList";

export default function FavouritePage() {
  const favouriteItems = useContext(FavouriteContext);

  var content;
  if (favouriteItems.itemsCount === 0) {
    content = <p>There are no favourites. Add some!</p>;
  } else {
    content = <MeetUpList list={favouriteItems.items} />;
  }

  return (
    <section>
      <h1>FavouritePage</h1>
      {content}
    </section>
  );
}
