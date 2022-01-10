import styled from "styled-components";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import CutleryIcon from "../images/cutlery.svg";
import ShoppingIcon from "../images/shopping.svg";
import BeautyIcon from "../images/beauty.svg";
import FavouriteIcon from "../images/favourite.svg";
import CalculatorIcon from "../images/calculator.svg";

function FooterNavbar() {
  return (
    <NavbarStyled>
      <NavLink to="restaurants">
        <img src={CutleryIcon} />
      </NavLink>
      <NavLink to="shopping">
        <img src={ShoppingIcon} />
      </NavLink>
      <NavLink to="beauty">
        <img src={BeautyIcon} />
      </NavLink>
      <NavLink to="favoriten">
        <img src={FavouriteIcon} />
      </NavLink>
      <NavLink to="co2-rechner">
        <img src={CalculatorIcon} />
      </NavLink>
    </NavbarStyled>
  );
}

export default FooterNavbar;

const NavbarStyled = styled.footer`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;
