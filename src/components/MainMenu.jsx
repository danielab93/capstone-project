import styled from "styled-components";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import logo from "../images/Logo_nacHHaltig.png";
import NavLinks from "./Navlinks";

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

      <Routes>
        <Route
          path="/"
          element={
            <>
              <LogoImage />
              <NavContainer>
                <NavLinks />
              </NavContainer>
            </>
          }
        />
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
  margin-top: 20%; // Elemente sollen sich gleichmäßig vertikal verteilen, mittig

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
