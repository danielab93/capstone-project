import Header from "../components/Header";
import FooterNavbar from "../components/FooterNavbar";
import calculatorheader from "../images/Calculator.png";
import Co2Calculator from "../components/Co2Calculator";

function Calculator() {
  return (
    <>
      <Header image={calculatorheader} altText="Favoriten Header" />
      <Co2Calculator />
      <FooterNavbar />
    </>
  );
}

export default Calculator;
