import styled from "styled-components";
import Header from "../components/Header";
import FooterNavbar from "../components/FooterNavbar";
import restaurantheader from "../images/Restaurants.png";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import BasicCards from "../components/BasicCards";
import { restaurants } from "../library/data.js";

function Restaurants() {
  const restaurantCards = restaurants.map((restaurant) => (
    <BasicCards
      key={restaurant.id}
      name={restaurant.name}
      type={restaurant.art}
      address={restaurant.adresse}
      hours={restaurant.zeiten}
    />
  ));
  return (
    <>
      <Header image={restaurantheader} altText="Restaurant Header" />
      <h2>Restaurants</h2>
      <OuterCardContainer>
        <section>{restaurantCards}</section>
      </OuterCardContainer>
      <FooterNavbar />
    </>
  );
}

export default Restaurants;

const OuterCardContainer = styled.div`
  margin-bottom: 6.2rem;
`;
