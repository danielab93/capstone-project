import styled from "styled-components";
import { useEffect, useState } from "react";
import NumberInput from "./NumberInput";
/* import isProductValid from "../library/validation"; */

function Co2Calculator({}) {
  const [inputCar, setInputCar] = useState(0);
  const [carValue, setCarValue] = useState(0);
  const [co2Car, setCo2Car] = useState(0);

  const [co2Budget, setCo2Budget] = useState(1500);

  const handleInputChange = (value) => {
    setInputCar(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputCar > 0) {
      setCarValue(carValue + inputCar);
      setCo2Car((carValue + inputCar) * 119);
      setInputCar(0);
    } else {
      alert("Bitte prüfe deine Eingabe");
    }
  };

  return (
    <CalculatorContainer>
      <section>
        Ich bin <br />
        <NumberInput
          name="km-car"
          placeholder="0"
          value={inputCar}
          onNumberInputChange={handleInputChange}
        >
          {" "}
        </NumberInput>
        Km Auto gefahren
        <NumberInput
          name="km-train"
          placeholder="0"
          /* value={product.price} */
          /* onNumberInputChange={handleInputChange} */
        >
          {" "}
        </NumberInput>
        Km Bahn gefahren
        <NumberInput
          name="km-airplane"
          placeholder="0"
          /* value={product.price} */
          /* onNumberInputChange={handleInputChange} */
        >
          {" "}
        </NumberInput>
        Km geflogen
        <br />
        <button onClick={handleSubmit}>Hinzufügen</button>
      </section>
      <section>
        <Table>
          <tr>
            <TableHeader>Gesamt Kilometer</TableHeader>
            <TableHeader>Co2-Ausstoß</TableHeader>
          </tr>
          <tr>
            <td>{carValue} Km Auto gefahren</td>
            <TableDataRight>{co2Car} Kg Co2</TableDataRight>
          </tr>
          <tr>
            <td>... Km Bahn gefahren</td>
            <TableDataRight>... Kg Co2</TableDataRight>
          </tr>
          <tr>
            <td>... Km geflogen</td>
            <TableDataRight>... Kg Co2</TableDataRight>
          </tr>
          <tr>
            <TableHeader>Co2 Budget</TableHeader>
          </tr>
          <tr>
            <td>Dein Jahresbudget: </td>
            <TableDataRight>1.500 Kg Co2</TableDataRight>
          </tr>
          <tr>
            <td>Bereits verbraucht: </td>
            <TableDataRight>... Kg Co2</TableDataRight>
          </tr>
          <tr>
            <td>Noch übrig: </td>
            <TableDataRight>... Kg Co2</TableDataRight>
          </tr>
        </Table>
      </section>
      <button>Alles zurücksetzen</button>
    </CalculatorContainer>
  );
}

export default Co2Calculator;

const CalculatorContainer = styled.div`
  border: 3px solid var(--color-three);
  border-radius: 10px;
  margin: 0.7rem;
  padding: 1rem;
`;

const Table = styled.table`
  margin-top: 1rem;
`;

const TableHeader = styled.th`
  text-align: left;
`;

const TableDataRight = styled.td`
  text-align: right;
`;
