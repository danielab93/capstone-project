import styled from "styled-components";
import { Routes, Route, NavLink, Link } from "react-router-dom";

function NavLinks() {
  return (
    <>
      <NavLink to="/restaurants">Restaurants</NavLink>
      <NavLink to="/shopping">Shopping</NavLink>
      <NavLink to="/beauty">Beauty </NavLink>
      <NavLink to="/favoriten">Favoriten</NavLink>
      <NavLink to="/co2-rechner">Co2-Rechner</NavLink>
    </>
  );
}

export default NavLinks;
