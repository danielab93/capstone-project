import styled from "styled-components";
import Header from "../components/Header";
import FooterNavbar from "../components/FooterNavbar";
import shoppingheader from "../images/Shopping.png";
import InformationCards from "../components/InformationCards";
import { shops } from "../library/data.js";

function Shopping({ onAddToFavourites, favouriteCards }) {
  const shoppingCards = shops.map((shop) => (
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
      shop={shop}
      isFavourite={favouriteCards?.some(
        (favourite) => favourite.id === shop.id
      )}
    />
  ));
  return (
    <>
      <Header image={shoppingheader} altText="Shopping Header" />
      <main>
        <h2>Shopping</h2>
        <section>{shoppingCards}</section>
      </main>
      <FooterNavbar />
    </>
  );
}

export default Shopping;
