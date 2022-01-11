import styled from "styled-components";
import FooterNavbar from "../components/FooterNavbar";
import Header from "../components/Header";
import calculatorheader from "../images/Calculator.png";
import { Routes, Route, NavLink, Link } from "react-router-dom";

function Calculator() {
  return (
    <>
      <Link to="/">
        <Header image={calculatorheader} altText="Favoriten Header" />
      </Link>
      <h1>Co2-Rechner</h1>
      <FooterNavbar />
    </>
  );
}

export default Calculator;
