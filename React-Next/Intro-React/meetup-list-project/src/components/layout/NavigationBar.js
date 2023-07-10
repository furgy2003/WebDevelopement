import { Link } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./NavigationBar.module.css";
import FavouriteContext from "../../store/favourite-context";
import { useContext } from "react";

export default function NavigationBar() {
  const favouriteItems = useContext(FavouriteContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React MeetUp</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetup</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favourite">
              Favourites{" "}
              <span className={classes.count}>{favouriteItems.itemsCount}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
