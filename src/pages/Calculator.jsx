import Header from "../components/Header";
import FooterNavbar from "../components/FooterNavbar";
import calculatorheader from "../images/Calculator.png";
import Co2Calculator from "../components/Co2Calculator";
import PopUp from "../components/PopUp";

function Calculator() {
  return (
    <>
      <Header image={calculatorheader} altText="Favoriten Header" />
      <PopUp
        text={
          "Mit dem Co2-Rechner kannst Du schnell und einfach herausfinden, ob Du noch in Deinem Co2-Budget bist! Einfach Daten eingeben und berechnen lassen!"
        }
      />
      <Co2Calculator />
      <FooterNavbar />
    </>
  );
}

export default Calculator;
