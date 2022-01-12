import styled from "styled-components";
import NavLinks from "./NavLinks";
import Header from "./Header";
import logo from "../images/Logo_nacHHaltig.png";

function MainMenu() {
  return (
    <>
      <Header image={logo} altText="Logo" />
      <NavContainer>
        <NavLinks />
      </NavContainer>
    </>
  );
}

export default MainMenu;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20%;
  a {
    background: var(--logo-two);
    color: var(--logo-one);
    border: 3px solid var(--color-one);
    border-radius: 5px;
    text-decoration: none;
    padding: 0.5rem;
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 1.3rem;
    display: block;
    width: 70%;
    text-align: center;
  }
  a.active {
    background: var(--logo-one);
    color: var(--logo-two);
    border: 3px solid var(--color-one);
  }
`;
