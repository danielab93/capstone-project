import styled from "styled-components";
import Header from "../components/Header";
import FooterNavbar from "../components/FooterNavbar";
import restaurantheader from "../images/Restaurants.png";
import InformationCards from "../components/InformationCards";
import { restaurants } from "../library/data.js";

function Restaurants() {
  const restaurantCards = restaurants.map((restaurant) => (
    <InformationCards
      key={restaurant.id}
      name={restaurant.name}
      category={restaurant.kategorie}
      info={restaurant.info}
      address={restaurant.adresse}
      hours={restaurant.zeiten}
      phone={restaurant.telefon}
      email={restaurant.email}
      website={restaurant.website}
      image={restaurant.image}
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
