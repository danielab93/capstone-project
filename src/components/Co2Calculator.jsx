import styled from "styled-components";
import { useEffect, useState } from "react";
import NumberInput from "./NumberInput";
/* import isProductValid from "../library/validation"; */

function Co2Calculator() {
  /* const [inputCar, setInputCar] = useState(0); */
  const [carValue, setCarValue] = useState(0);
  const [co2Car, setCo2Car] = useState(0);

  /* const [inputTrain, setInputTrain] = useState(0); */
  const [trainValue, setTrainValue] = useState(0);
  const [co2Train, setCo2Train] = useState(0);

  /* const [inputFlight, setInputFlight] = useState(0); */
  const [flightValue, setFlightValue] = useState(0);
  const [co2Flight, setCo2Flight] = useState(0);

  const [co2BudgetSpent, setCo2BudgetSpent] = useState(0);
  const [co2BudgetLeft, setCo2BudgetLeft] = useState(1500);
  // -------------------------------------------------------------------
  const initialValues = {
    inputCar: 0,
    inputTrain: 0,
    inputFlight: 0,
  };

  const [values, setValues] = useState(initialValues);
  // -------------------------------------------------------------------

  const handleInputChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.inputCar > 0) {
      setCarValue(carValue + values.inputCar);
      const co2Car = (carValue + values.inputCar) * 0.119;
      setCo2Car(co2Car.toFixed(2));
      setCo2BudgetSpent(1500 - co2Car.toFixed(2));
      const co2BudgetSpentCar = 1500 - co2Car.toFixed(2);
      setCo2BudgetLeft(co2BudgetLeft - co2BudgetSpentCar);
      /* setInputCar(); */
    } else if (values.inputTrain > 0) {
      setTrainValue(trainValue + values.inputTrain);
      const co2Train = (trainValue + values.inputTrain) * 0.32;
      setCo2Train(co2Train.toFixed(2));
      setCo2BudgetSpent(1500 - co2Train.toFixed(2));
      const co2BudgetSpentTrain = 1500 - co2Train.toFixed(2);
      setCo2BudgetLeft(co2BudgetLeft - co2BudgetSpentTrain);
      setInputTrain();
    } else if (values.inputFlight > 0) {
      setFlightValue(flightValue + values.inputFlight);
      const co2Flight = (flightValue + values.inputFlight) * 0.38;
      setCo2Flight(co2Flight.toFixed(2));
      setCo2BudgetSpent(1500 - co2Flight.toFixed(2));
      const co2BudgetSpentFlight = 1500 - co2Flight.toFixed(2);
      setCo2BudgetLeft(co2BudgetLeft - co2BudgetSpentFlight);
      setInputFlight();
    } else {
      alert("Bitte prüfe deine Eingabe");
    }
  };

  console.log(values.inputCar);

  return (
    <CalculatorContainer>
      <form onSubmit={handleSubmit}>
        <section>
          Ich bin <br />
          <NumberInput
            name="inputCar"
            /* placeholder="0" */
            value={values.inputCar}
            onNumberInputChange={handleInputChange}
          >
            {" "}
          </NumberInput>
          Km Auto gefahren
          <NumberInput
            name="inputTrain"
            /* placeholder="0" */
            value={values.inputTrain}
            onNumberInputChange={handleInputChange}
          >
            {" "}
          </NumberInput>
          Km Bahn gefahren
          <NumberInput
            name="inputFlight"
            placeholder="0"
            value={values.inputFlight}
            onNumberInputChange={handleInputChange}
          >
            {" "}
          </NumberInput>
          Km geflogen
          <br />
          <button type="submit">Hinzufügen</button>
        </section>
      </form>
      <section>
        <Table>
          <tbody>
            <tr>
              <TableHeader>Gesamt Kilometer</TableHeader>
              <TableHeader>Co2-Ausstoß</TableHeader>
            </tr>
            <tr>
              <td>{carValue} Km Auto</td>
              <TableDataRight>{co2Car} Kg Co2</TableDataRight>
            </tr>
            <tr>
              <td>{trainValue} Km Bahn</td>
              <TableDataRight>{co2Train} Kg Co2</TableDataRight>
            </tr>
            <tr>
              <td>{flightValue} Km Flug</td>
              <TableDataRight>{co2Flight} Kg Co2</TableDataRight>
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
              <TableDataRight>{co2BudgetSpent} Kg Co2</TableDataRight>
            </tr>
            <tr>
              <td>Noch übrig: </td>
              <TableDataRight>{co2BudgetLeft} Kg Co2</TableDataRight>
            </tr>
          </tbody>
        </Table>
      </section>
      <button
      /*  type="reset"
        onClick={() => {
          setProduct(initialProduct);
          setHasFormErrors(false);
        }} */
      >
        Alles zurücksetzen
      </button>
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
