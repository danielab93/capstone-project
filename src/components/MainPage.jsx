import styled from "styled-components";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import logo from "../images/Logo_nacHHaltig.png";
import MainMenu from "./MainMenu";

import Restaurants from "../pages/Restaurants";
import Shopping from "../pages/Shopping";
import Beauty from "../pages/Beauty";
import Favourites from "../pages/Favourites";
import Calculator from "../pages/Calculator";
import NotFound from "../pages/NotFound";

function MainPage() {
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
              <MainMenu />
            </>
          }
        />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/favoriten" element={<Favourites />} />
        <Route path="/co2-rechner" element={<Calculator />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default MainPage;

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
