import styled from "styled-components";
import FooterNavbar from "../components/FooterNavbar";
import Header from "../components/Header";
import beautyheader from "../images/Beauty.png";
import { Routes, Route, NavLink, Link } from "react-router-dom";

function Beauty() {
  return (
    <>
      <Link to="/">
        <Header image={beautyheader} altText="Beauty Header" />
      </Link>
      <h1>Beauty</h1>
      <FooterNavbar />
    </>
  );
}

export default Beauty;
