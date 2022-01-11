import styled from "styled-components";
import FooterNavbar from "../components/FooterNavbar";
import Header from "../components/Header";
import favoritenheader from "../images/Favoriten.png";
import { Routes, Route, NavLink, Link } from "react-router-dom";

function Favourites() {
  return (
    <>
      <Link to="/">
        <Header image={favoritenheader} altText="Favoriten Header" />
      </Link>
      <h1>Favoriten</h1>
      <FooterNavbar />
    </>
  );
}

export default Favourites;
