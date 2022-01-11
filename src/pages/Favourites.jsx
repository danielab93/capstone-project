import styled from "styled-components";
import FooterNavbar from "../components/FooterNavbar";
import Header from "../components/Header";
import favoritenheader from "../images/Favoriten.png";

function Favourites() {
  return (
    <>
      <Header image={favoritenheader} altText="Favoriten Header" />
      <h1>Favoriten</h1>
      <FooterNavbar />
    </>
  );
}

export default Favourites;
