import styled from "styled-components";
import logo from "../images/Logo_nacHHaltig.png";

function FirstScreen() {
  return (
    <>
      <HeadlineContainer>
        <Headline1>Willkommen bei</Headline1>
        <LogoImage src={logo} alt="Logo" />
        <Headline2>Deine App für ein nachhaltiges Leben in Hamburg</Headline2>
      </HeadlineContainer>
    </>
  );
}

export default FirstScreen;

/* --- STYLING --- */

const HeadlineContainer = styled.div`
  background-color: beige;
  width: 100vw;
  height: 100vh;
`;

const Headline1 = styled.h1``;

const Headline2 = styled.h2``;

const LogoImage = styled.img`
  width: 100px;
`;
