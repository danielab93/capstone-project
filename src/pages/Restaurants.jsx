import styled from "styled-components";
import FooterNavbar from "../components/FooterNavbar";
import Header from "../components/Header";
import restaurantheader from "../images/Restaurants.png";
import { Routes, Route, NavLink, Link } from "react-router-dom";

function Restaurants() {
  return (
    <>
      <Link to="/">
        <Header image={restaurantheader} altText="Restaurant Header" />
      </Link>
      <h1>Restaurants</h1>
      <FooterNavbar />
    </>
  );
}

export default Restaurants;
