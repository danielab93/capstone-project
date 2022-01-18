import { Routes, Route, NavLink, Link } from "react-router-dom";
import { saveToLocal, loadFromLocal } from "../Library/localStorage";
import { useState, useEffect } from "react";
import MainMenu from "../components/MainMenu";

import Restaurants from "../pages/Restaurants";
import Shopping from "../pages/Shopping";
import Beauty from "../pages/Beauty";
import Favourites from "../pages/Favourites";
import Calculator from "../pages/Calculator";
import NotFound from "../pages/NotFound";

function MainPage() {
  const [locations, setLocations] = useState([]); // brauche ich diesen useState?
  const [filteredLocations, setFilteredLocations] = useState([]);

  const handleFilterLocations = (category) => {
    if (category === "") {
      setFilteredLocations(""); // setFilteredLocations (zeige alle Karten)
    } else {
      const updatedFilteredLocations = locations.filter(
        (location) => location.kategorie === kategorie
      );
      setFilteredLocations(updatedFilteredLocations);
    }
  };

  const localStorageFavouriteCards = loadFromLocal("favouriteCards");
  const [favouriteCards, setFavouriteCards] = useState(
    localStorageFavouriteCards ?? []
  );

  useEffect(() => {
    saveToLocal("favouriteCards", favouriteCards);
  }, [favouriteCards]);

  function addToFavourites(favouriteCardToAdd) {
    if (
      favouriteCards.some(
        (everyFavouriteCard) => everyFavouriteCard?.id === favouriteCardToAdd.id
      )
    ) {
      const updatedFavouriteCards = favouriteCards.filter(
        (everyFavouriteCard) => everyFavouriteCard?.id !== favouriteCardToAdd.id
      );
      setFavouriteCards(updatedFavouriteCards);
    } else {
      setFavouriteCards([...favouriteCards, favouriteCardToAdd]);
    }
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainMenu />
            </>
          }
        />
        <Route
          path="/restaurants"
          element={
            <Restaurants
              onAddToFavourites={addToFavourites}
              favouriteCards={favouriteCards}
              onFilterLocations={handleFilterLocations}
            />
          }
        />
        <Route
          path="/shopping"
          element={
            <Shopping
              onAddToFavourites={addToFavourites}
              favouriteCards={favouriteCards}
            />
          }
        />
        <Route
          path="/beauty"
          element={
            <Beauty
              onAddToFavourites={addToFavourites}
              favouriteCards={favouriteCards}
            />
          }
        />
        <Route
          path="/favoriten"
          element={
            <Favourites
              onAddToFavourites={addToFavourites}
              favouriteCards={favouriteCards}
            />
          }
        />
        <Route path="/co2-rechner" element={<Calculator />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default MainPage;
