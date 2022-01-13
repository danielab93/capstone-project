import styled from "styled-components";
import Header from "../components/Header";
import FooterNavbar from "../components/FooterNavbar";
import beautyheader from "../images/Beauty.png";
import InformationCards from "../components/InformationCards";
import { beautyspots } from "../library/data.js";

function Beauty() {
  const beautyCards = beautyspots.map((beauty) => (
    <InformationCards
      key={beauty.id}
      name={beauty.name}
      category={beauty.kategorie}
      info={beauty.info}
      address={beauty.adresse}
      hours={beauty.zeiten}
      phone={beauty.telefon}
      email={beauty.email}
      website={beauty.website}
      image={beauty.image}
    />
  ));

  return (
    <>
      <Header image={beautyheader} altText="Beauty Header" />
      <h2>Beauty</h2>
      <OuterCardContainer>
        <section>{beautyCards}</section>
      </OuterCardContainer>
      <FooterNavbar />
    </>
  );
}

export default Beauty;

// this styling still needs to be moved to InformationCards
const OuterCardContainer = styled.div`
  margin-bottom: 6.2rem;
`;
