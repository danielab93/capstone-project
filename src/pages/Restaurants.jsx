import styled from "styled-components";
import FooterNavbar from "../components/FooterNavbar";
import Header from "../components/Header";
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
      adress={restaurant.adresse}
      hours={restaurant.zeiten}
    />
  ));
  return (
    <>
      <Link to="/">
        <Header image={restaurantheader} altText="Restaurant Header" />
      </Link>
      <h1>Restaurants</h1>
      <section>{restaurantCards}</section>
      <FooterNavbar />
    </>
  );
}

export default Restaurants;
