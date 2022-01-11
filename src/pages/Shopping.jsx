import styled from "styled-components";
import FooterNavbar from "../components/FooterNavbar";
import Header from "../components/Header";
import shoppingheader from "../images/Shopping.png";
import { Routes, Route, NavLink, Link } from "react-router-dom";

function Shopping() {
  return (
    <>
      <Link to="/">
        <Header image={shoppingheader} altText="Shopping Header" />
      </Link>
      <h1>Shopping</h1>
      <FooterNavbar />
    </>
  );
}

export default Shopping;
