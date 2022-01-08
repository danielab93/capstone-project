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

const Headline1 = styled.h1`
  padding-top: 2rem;
  text-align: center; ;
`;

const Headline2 = styled.h2`
  margin-top: 2rem;
  text-align: center;
`;

const LogoImage = styled.img``;
