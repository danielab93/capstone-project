import styled from "styled-components";
import Header from "../components/Header";
import FooterNavbar from "../components/FooterNavbar";
import restaurantheader from "../images/Restaurants.png";
import InformationCards from "../components/InformationCards";
import Filter from "../components/Filter";

import { restaurants } from "../library/data.js";

function Restaurants({
  onAddToFavourites,
  favouriteCards,
  onFilterLocations,
  locationsRestaurants,
}) {
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
      isFavourite={favouriteCards?.some(
        (favourite) => favourite.id === restaurant.id
      )}
    />
  ));

  return (
    <>
      <Header image={restaurantheader} altText="Restaurant Header" />
      <main>
        <Filter
          name="category"
          value={restaurants.kategorie}
          options={restaurants.map((restaurant) => restaurant.kategorie)}
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
