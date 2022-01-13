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
      <h2>Shopping</h2>
      <OuterCardContainer>
        <section>{shoppingCards}</section>
      </OuterCardContainer>
      <FooterNavbar />
    </>
  );
}

export default Shopping;

// this styling still needs to be moved to InformationCards
const OuterCardContainer = styled.div`
  margin-bottom: 6.2rem;
`;
