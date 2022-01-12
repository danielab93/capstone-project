import Header from "../components/Header";
import FooterNavbar from "../components/FooterNavbar";

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
