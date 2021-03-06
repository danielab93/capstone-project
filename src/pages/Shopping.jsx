import { useEffect } from "react";
import Header from "../components/Header";
import FooterNavbar from "../components/FooterNavbar";
import shoppingheader from "../images/Shopping.png";
import InformationCards from "../components/InformationCards";
import Filter from "../components/Filter";
import PopUp from "../components/PopUp";
import { shops } from "../library/data.js";
import { filterOptions } from "../library/filterOptions";

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
      center={shop.center}
      position={shop.position}
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
        <PopUp
          text={
            "Nachhaltig shoppen? Das geht! Hier findest du Geheimtipps zum umweltfreundlichen Einkaufen."
          }
        />
        <section>{shoppingCards}</section>
      </main>
      <FooterNavbar />
    </>
  );
}

export default Shopping;
