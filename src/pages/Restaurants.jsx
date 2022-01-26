import styled from "styled-components";
import Header from "../components/Header";
import FooterNavbar from "../components/FooterNavbar";
import restaurantheader from "../images/Restaurants.png";
import InformationCards from "../components/InformationCards";
import Filter from "../components/Filter";
import PopUp from "../components/PopUp";
import { restaurants } from "../library/data.js";
import { filterOptions } from "../library/filterOptions";
import { useEffect } from "react";

function Restaurants({
  onAddToFavourites,
  favouriteCards,
  onFilterLocations,
  locationsRestaurants,
  onResetfilter,
}) {
  useEffect(() => {
    onResetfilter();
  }, []);

  const restaurantCards = locationsRestaurants.map((restaurant) => (
    <InformationCards
      key={restaurant.id}
      name={restaurant.name}
      category={restaurant.kategorie}
      info={restaurant.info}
      contact={restaurant.kontakt}
      email={restaurant.email}
      website={restaurant.website}
      image={restaurant.image}
      onAddToFavourites={onAddToFavourites}
      location={restaurant}
      center={restaurant.center}
      position={restaurant.position}
      isFavourite={favouriteCards?.some(
        (favourite) => favourite.id === restaurant.id
      )}
    />
  ));

  return (
    <>
      <Header image={restaurantheader} altText="Restaurant Header" />
      <PopUp
        text={
          "Hunger? Hier findest du eine Auswahl der besten veganen und vegetarischen Restaurants in Hamburg!"
        }
      />
      <main>
        <Filter
          name="category"
          value={restaurants.kategorie}
          options={filterOptions(restaurants)}
          onFilterLocations={onFilterLocations}
          locations={restaurants}
        />

        <section>{restaurantCards}</section>
      </main>
      <FooterNavbar />
    </>
  );
}

export default Restaurants;
