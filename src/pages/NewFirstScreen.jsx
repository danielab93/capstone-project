import styled from "styled-components";
import logo from "../images/Logo_nacHHaltig.png";

function NewFirstScreen() {
  return (
    <>
      <HeadlineOutsideContainer>
        <HeadlineInsideContainer>
          <Headline1>Willkommen bei</Headline1>
          <LogoImage src={logo} alt="Logo" />
          <Headline2>Deine App für ein nachhaltiges Leben in Hamburg</Headline2>
        </HeadlineInsideContainer>
      </HeadlineOutsideContainer>
    </>
  );
}

export default NewFirstScreen;

const HeadlineOutsideContainer = styled.div`
  background-color: var(--main-background);
  width: 100vw;
  height: 100vh;
`;

const HeadlineInsideContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Headline1 = styled.h1`
  color: var(--logo-one);
  margin: 50% 0 5% 0;
  text-align: center;
`;

const Headline2 = styled.h2`
  color: var(--logo-one);
  text-align: center;
`;

const LogoImage = styled.img`
  width: 20rem;
  align-self: center;
`;
