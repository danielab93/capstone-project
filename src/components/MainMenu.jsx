import styled from "styled-components";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import logo from "../images/Logo_nacHHaltig.png";

import Restaurants from "../pages/Restaurants";
import Shopping from "../pages/Shopping";
import Beauty from "../pages/Beauty";
import Favourites from "../pages/Favourites";
import Calculator from "../pages/Calculator";
import NotFound from "../pages/NotFound";

function MainMenu() {
  return (
    <>
      <Header>
        <Link to="/">
          <LogoImage src={logo} alt="Logo" />
        </Link>
      </Header>

      <NavContainer>
        <LinkStyle>
          <NavLink to="restaurants">Restaurants</NavLink> <br />
        </LinkStyle>
        <LinkStyle>
          <NavLink to="shopping">Shopping</NavLink> <br />
        </LinkStyle>
        <LinkStyle>
          <NavLink to="beauty">Beauty </NavLink> <br />
        </LinkStyle>
        <LinkStyle>
          <NavLink to="favoriten">Favoriten</NavLink> <br />
        </LinkStyle>
        <LinkStyle>
          <NavLink to="co2-rechner">Co2-Rechner</NavLink> <br />
        </LinkStyle>
      </NavContainer>
      <Routes>
        <Route path="/" element={<LogoImage />} />
        <Route path="restaurants" element={<Restaurants />}></Route>
        <Route path="shopping" element={<Shopping />}></Route>
        <Route path="beauty" element={<Beauty />}></Route>
        <Route path="favoriten" element={<Favourites />}></Route>
        <Route path="co2-rechner" element={<Calculator />}></Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default MainMenu;

/* --- STYLING --- */

const Header = styled.header`
  background: var(--main-background);
  border-bottom: 2px solid var(--logo-one);
  text-align: center;
`;

const LogoImage = styled.img`
  width: 20rem;
  align-self: center;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30%;

  a {
    background: var(--logo-two);
    color: var(--logo-one);
    border: 3px solid var(--color-one);
    border-radius: 5px;
    text-decoration: none;
    padding: 0.5rem;
  }

  a.active {
    background: var(--logo-one);
    color: var(--logo-two);
    border: 3px solid var(--color-one);
  }
`;

const LinkStyle = styled.div`
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 2.5rem;
`;
