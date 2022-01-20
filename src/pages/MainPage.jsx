import { Routes, Route, NavLink, Link } from "react-router-dom";
import { saveToLocal, loadFromLocal } from "../library/localStorage";
import { useState, useEffect } from "react";
import MainMenu from "../components/MainMenu";

import Restaurants from "../pages/Restaurants";
import Shopping from "../pages/Shopping";
import Beauty from "../pages/Beauty";
import Favourites from "../pages/Favourites";
import Calculator from "../pages/Calculator";
import NotFound from "../pages/NotFound";

import { restaurants, shops, beautyspots } from "../library/data.js";

function MainPage() {
  const [locationsRestaurants, setLocationsRestaurants] = useState(restaurants);
  const [locationsShops, setLocationsShops] = useState(shops);
  const [locationsBeautyspots, setLocationsBeautyspots] = useState(beautyspots);
  const [filteredLocations, setFilteredLocations] = useState([]);

  const resetfilter = () => setFilteredLocations([]);

  const handleFilterLocations = (category, locations) => {
    if (category === "") {
      setFilteredLocations(locations);
    } else {
      const updatedFilteredLocations = locations.filter(
        (location) => location.kategorie === category
      );
      setFilteredLocations(updatedFilteredLocations);
      console.log(updatedFilteredLocations);
      console.log(filteredLocations);
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
              onResetfilter={resetfilter}
              locationsRestaurants={
                filteredLocations.length > 0
                  ? filteredLocations
                  : locationsRestaurants
              }
              onFilterLocations={handleFilterLocations}
              onAddToFavourites={addToFavourites}
              favouriteCards={favouriteCards}
            />
          }
        />
        <Route
          path="/shopping"
          element={
            <Shopping
              onResetfilter={resetfilter}
              locationsShops={
                filteredLocations.length > 0
                  ? filteredLocations
                  : locationsShops
              }
              onFilterLocations={handleFilterLocations}
              onAddToFavourites={addToFavourites}
              favouriteCards={favouriteCards}
            />
          }
        />
        <Route
          path="/beauty"
          element={
            <Beauty
              onResetfilter={resetfilter}
              locationsBeautyspots={
                filteredLocations.length > 0
                  ? filteredLocations
                  : locationsBeautyspots
              }
              onFilterLocations={handleFilterLocations}
              onAddToFavourites={addToFavourites}
              favouriteCards={favouriteCards}
            />
          }
        />
        <Route
          path="/favoriten"
          element={
            <Favourites
              onResetfilter={resetfilter}
              /* locations={
                filteredLocations.length > 0
                  ? filteredLocations
                  : favouriteCards
              } */
              onFilterLocations={handleFilterLocations}
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
