import styled from "styled-components";
import Header from "../components/Header";
import FooterNavbar from "../components/FooterNavbar";
import beautyheader from "../images/Beauty.png";
import InformationCards from "../components/InformationCards";
import Filter from "../components/Filter";
import { beautyspots } from "../library/data.js";

function Beauty({
  locationsBeautyspots,
  onAddToFavourites,
  favouriteCards,
  onFilterLocations,
}) {
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
      isFavourite={favouriteCards?.some(
        (favourite) => favourite.id === beauty.id
      )}
    />
  ));

  const filterOptions = (locations) => [
    ...new Set(locations.map((location) => location.kategorie)),
  ]; // DIESE FUNKTION AUSLAGERN UND DANN IN JEDER KOMPONENTE AUFRUFEN!!!

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
        <section>{beautyCards}</section>
      </main>
      <FooterNavbar />
    </>
  );
}

export default Beauty;
