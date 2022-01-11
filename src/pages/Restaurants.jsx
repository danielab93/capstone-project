import styled from "styled-components";
import FooterNavbar from "../components/FooterNavbar";
import Header from "../components/Header";
import restaurantheader from "../images/Restaurants.png";

function Restaurants() {
  return (
    <>
      <Header image={restaurantheader} altText="Restaurant Header" />
      <h1>Restaurants</h1>
      <FooterNavbar />
    </>
  );
}

export default Restaurants;
