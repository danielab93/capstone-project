import styled from "styled-components";
import Header from "../components/Header";
import FooterNavbar from "../components/FooterNavbar";
import beautyheader from "../images/Beauty.png";
import InformationCards from "../components/InformationCards";
import Filter from "../components/Filter";
import PopUp from "../components/PopUp";
import { beautyspots } from "../library/data.js";
import { filterOptions } from "../library/filterOptions";
import { useEffect } from "react";

function Beauty({
  locationsBeautyspots,
  onAddToFavourites,
  favouriteCards,
  onFilterLocations,
  onResetfilter,
}) {
  useEffect(() => {
    onResetfilter();
  }, []);

  const beautyCards = locationsBeautyspots.map((beauty) => (
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
      location={beauty}
      position={beauty.position}
      isFavourite={favouriteCards?.some(
        (favourite) => favourite.id === beauty.id
      )}
    />
  ));

  return (
    <>
      <Header image={beautyheader} altText="Beauty Header" />
      <main>
        <Filter
          name="category"
          value={beautyspots.kategorie}
          options={filterOptions(beautyspots)}
          onFilterLocations={onFilterLocations}
          locations={beautyspots}
        />
        <PopUp
          text={
            "Schönheit kommt von Innen und vor allem aus der Natur. Finde die besten Beautysalons und Friseure, die ausschließlich mit Naturkosmetik arbeiten."
          }
        />
        <section>{beautyCards}</section>
      </main>
      <FooterNavbar />
    </>
  );
}

export default Beauty;
