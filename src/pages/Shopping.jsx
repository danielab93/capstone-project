import styled from "styled-components";
import FooterNavbar from "../components/FooterNavbar";
import Header from "../components/Header";
import shoppingheader from "../images/Shopping.png";

function Shopping() {
  return (
    <>
      <Header image={shoppingheader} altText="Shopping Header" />
      <h1>Shopping</h1>
      <FooterNavbar />
    </>
  );
}

export default Shopping;
