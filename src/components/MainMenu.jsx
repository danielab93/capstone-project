import styled from "styled-components";
import { Routes, Route, NavLink, Link } from "react-router-dom";

function MainMenu() {
  return (
    <>
      <nav>
        <NavLink to="Restaurants">Restaurants</NavLink> <br />
        <NavLink to="Shopping">Shopping</NavLink> <br />
        <NavLink to="Beauty + Hair">Beauty + Hair</NavLink> <br />
        <NavLink to="Favoriten">Favoriten</NavLink> <br />
        <NavLink to="Co2-Rechner">Co2-Rechner</NavLink>
      </nav>
    </>
  );
}

export default MainMenu;
