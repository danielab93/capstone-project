import styled from "styled-components";
import Header from "../components/Header";
import FooterNavbar from "../components/FooterNavbar";
import shoppingheader from "../images/Shopping.png";
import InformationCards from "../components/InformationCards";
import { shops } from "../library/data.js";

function Shopping() {
  const shoppingCards = shops.map((shop) => (
    <InformationCards
      key={shop.id}
      name={shop.name}
      category={shop.kategorie}
      info={shop.info}
      address={shop.adresse}
      hours={shop.zeiten}
      phone={shop.telefon}
      email={shop.email}
      website={shop.website}
      image={shop.image}
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
