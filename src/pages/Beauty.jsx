import styled from "styled-components";
import FooterNavbar from "../components/FooterNavbar";
import Header from "../components/Header";
import beautyheader from "../images/Beauty.png";

function Beauty() {
  return (
    <>
      <Header image={beautyheader} altText="Beauty Header" />
      <h1>Beauty</h1>
      <FooterNavbar />
    </>
  );
}

export default Beauty;
