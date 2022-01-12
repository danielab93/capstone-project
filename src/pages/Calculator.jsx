import Header from "../components/Header";
import FooterNavbar from "../components/FooterNavbar";

import calculatorheader from "../images/Calculator.png";

function Calculator() {
  return (
    <>
      <Header image={calculatorheader} altText="Favoriten Header" />
      <h1>Co2-Rechner</h1>
      <FooterNavbar />
    </>
  );
}

export default Calculator;
