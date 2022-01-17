import styled from "styled-components";
import Header from "../components/Header";
import FooterNavbar from "../components/FooterNavbar";
import beautyheader from "../images/Beauty.png";
import InformationCards from "../components/InformationCards";
import { beautyspots } from "../library/data.js";

function Beauty({ onAddToFavourites }) {
  const beautyCards = beautyspots.map((beauty) => (
    <InformationCards
      key={beauty.id}
      name={beauty.name}
      category={beauty.kategorie}
      info={beauty.info}
      contact={beauty.kontakt}
      email={beauty.email}
      website={beauty.website}
      image={beauty.image}
      onAddToFavourites={onAddToFavourites}
      beauty={beauty}
    />
  ));

  return (
    <>
      <Header image={beautyheader} altText="Beauty Header" />
      <main>
        <h2>Beauty</h2>
        <section>{beautyCards}</section>
      </main>
      <FooterNavbar />
    </>
  );
}

export default Beauty;
