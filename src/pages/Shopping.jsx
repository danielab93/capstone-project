import styled from "styled-components";
import Header from "../components/Header";
import FooterNavbar from "../components/FooterNavbar";
import shoppingheader from "../images/Shopping.png";
import InformationCards from "../components/InformationCards";
import Filter from "../components/Filter";
import { shops } from "../library/data.js";
import { filterOptions } from "../library/filterOptions";
import { useEffect } from "react";

function Shopping({
  onAddToFavourites,
  favouriteCards,
  onFilterLocations,
  locationsShops,
  onResetfilter,
}) {
  useEffect(() => {
    onResetfilter();
  }, []);

  const shoppingCards = locationsShops.map((shop) => (
    <InformationCards
      key={shop.id}
      name={shop.name}
      category={shop.kategorie}
      info={shop.info}
      contact={shop.kontakt}
      email={shop.email}
      website={shop.website}
      image={shop.image}
      onAddToFavourites={onAddToFavourites}
      location={shop}
      isFavourite={favouriteCards?.some(
        (favourite) => favourite.id === shop.id
      )}
    />
  ));
  return (
    <>
      <Header image={shoppingheader} altText="Shopping Header" />
      <main>
        <Filter
          name="category"
          value={shops.kategorie}
          options={filterOptions(shops)}
          onFilterLocations={onFilterLocations}
          locations={shops}
        />
        <section>{shoppingCards}</section>
      </main>
      <FooterNavbar />
    </>
  );
}

export default Shopping;
