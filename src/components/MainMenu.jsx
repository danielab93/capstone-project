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
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 30%;
  a {
    background: var(--logo-two);
    border: none;
    border-radius: 10px;
    color: var(--logo-one);
    display: block;
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 1.3rem;
    padding: 0.5rem;
    text-align: center;
    text-decoration: none;
    width: 70%;
  }
`;
