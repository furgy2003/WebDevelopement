// To create global object that can be used by different components
// Help solve the problem of nested prop
import { createContext, useState } from "react";

// initialize the expected format of the context/ global object
const FavouriteContext = createContext({
  items: [],
  itemsCount: 0,
  addFav: (item) => {},
  removeFav: (meetID) => {},
  isFav: (meetID) => {},
});

// Create wrapper that will be wrap around the components that we want to have access to the
// context
export function FavouriteContextProvider(props) {
  const [favouriteItems, setFavouriteItems] = useState([]);

  function addFavHandler(item) {
    setFavouriteItems((prevItems) => [item, ...prevItems]);
  }

  function removeFavHandler(meetID) {
    setFavouriteItems((prevItems) =>
      prevItems.filter((item) => item.id !== meetID)
    );
  }

  function isItemFav(meetID) {
    return favouriteItems.some((item) => item.id === meetID);
  }

  // pass the context object into the provider
  const context = {
    items: favouriteItems,
    itemsCount: favouriteItems.length,
    addFav: addFavHandler,
    removeFav: removeFavHandler,
    isFav: isItemFav,
  };

  return (
    <FavouriteContext.Provider value={context}>
      {props.children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContext;
