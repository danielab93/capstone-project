import styled from "styled-components";
import Header from "../components/Header";
import FooterNavbar from "../components/FooterNavbar";
import restaurantheader from "../images/Restaurants.png";
import InformationCards from "../components/InformationCards";

import { restaurants } from "../library/data.js";

function Restaurants({ onAddToFavourites, favouriteCards }) {
  const restaurantCards = restaurants.map((restaurant, index) => (
    <InformationCards
      keyprop={restaurant.id}
      name={restaurant.name}
      category={restaurant.kategorie}
      info={restaurant.info}
      contact={restaurant.kontakt}
      email={restaurant.email}
      website={restaurant.website}
      image={restaurant.image}
      onAddToFavourites={onAddToFavourites}
      restaurant={restaurant}
      isFavourite={favouriteCards?.some(
        (favourite) => favourite.id === restaurant.id
      )}
    />
  ));

  return (
    <>
      <Header image={restaurantheader} altText="Restaurant Header" />
      <main>
        <h2>Restaurants</h2>
        <section>{restaurantCards}</section>
      </main>
      <FooterNavbar />
    </>
  );
}

export default Restaurants;
