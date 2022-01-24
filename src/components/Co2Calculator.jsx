import styled from "styled-components";
import { useEffect, useState } from "react";
import { saveToLocal, loadFromLocal } from "../library/localStorage";
import NumberInput from "./NumberInput";
/* import isProductValid from "../library/validation"; */

function Co2Calculator() {
  const [carKm, setCarKm] = useState(0);
  const [co2Car, setCo2Car] = useState(0);

  const [trainKm, setTrainKm] = useState(0);
  const [co2Train, setCo2Train] = useState(0);

  const [flightKm, setFlightKm] = useState(0);
  const [co2Flight, setCo2Flight] = useState(0);

  const [co2BudgetSpent, setCo2BudgetSpent] = useState(0);
  const [co2BudgetLeft, setCo2BudgetLeft] = useState(1500);

  const initialValues = {
    inputCar: 0,
    inputTrain: 0,
    inputFlight: 0,
  };

  const [values, setValues] = useState(initialValues);
  const [hasFormErrors, setHasFormErrors] = useState(false);

  const handleInputChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  // LOCAL STORAGE
  const localStorageCo2Calculation = loadFromLocal("co2calculation");
  const [co2Calculation, setCo2Calculation] = useState(
    localStorageCo2Calculation ?? []
  );

  useEffect(() => {
    saveToLocal("co2calculation", co2Calculation);
  }, [co2Calculation]);
  // LOCAL STORAGE

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.inputCar > 0) {
      const totalCarKm = carKm + values.inputCar;
      setCarKm(totalCarKm); // Test für localstorage
      const co2Car = (carKm + values.inputCar) * 0.119;
      setCo2Car(Math.round(co2Car * 100) / 100);
      setCo2BudgetSpent(
        Math.round((co2BudgetSpent + values.inputCar * 0.119) * 100) / 100
      );
      setCo2BudgetLeft(
        Math.round((co2BudgetLeft - values.inputCar * 0.119) * 100) / 100
      );
      setValues(initialValues);
      setHasFormErrors(false);
    } else if (values.inputTrain > 0) {
      setTrainKm(trainKm + values.inputTrain);
      const co2Train = (trainKm + values.inputTrain) * 0.032;
      setCo2Train(Math.round(co2Train * 100) / 100);
      setCo2BudgetSpent(
        Math.round((co2BudgetSpent + values.inputTrain * 0.032) * 100) / 100
      );
      setCo2BudgetLeft(
        Math.round((co2BudgetLeft - values.inputTrain * 0.032) * 100) / 100
      );
      setValues(initialValues);
      setHasFormErrors(false);
    } else if (values.inputFlight > 0) {
      setFlightKm(flightKm + values.inputFlight);
      const co2Flight = (flightKm + values.inputFlight) * 0.38;
      setCo2Flight(Math.round(co2Flight * 100) / 100);
      setCo2BudgetSpent(
        Math.round((co2BudgetSpent + values.inputFlight * 0.38) * 100) / 100
      );
      setCo2BudgetLeft(
        Math.round((co2BudgetLeft - values.inputFlight * 0.38) * 100) / 100
      );
      setValues(initialValues);
      setHasFormErrors(false);
    } else {
      setHasFormErrors(true);
    }
  };

  return (
    <CalculatorContainer>
      {hasFormErrors && <ErrorMessage>Bitte prüfe Deine Eingabe!</ErrorMessage>}
      <form onSubmit={handleSubmit}>
        <InputSection>
          Ich bin <br />
          <NumberInput
            name="inputCar"
            value={values.inputCar}
            onNumberInputChange={handleInputChange}
          >
            {" "}
          </NumberInput>
          Km Auto gefahren
          <NumberInput
            name="inputTrain"
            value={values.inputTrain}
            onNumberInputChange={handleInputChange}
          >
            {" "}
          </NumberInput>
          Km Bahn gefahren
          <NumberInput
            name="inputFlight"
            value={values.inputFlight}
            onNumberInputChange={handleInputChange}
          >
            {" "}
          </NumberInput>
          Km geflogen
          <br />
          <button type="submit">Hinzufügen</button>
        </InputSection>
      </form>
      <section>
        <Table>
          <tbody>
            <tr>
              <TableHeader>Gesamt Kilometer</TableHeader>
              <TableHeader>Co2-Ausstoß</TableHeader>
            </tr>
            <tr>
              <td>{carKm} Km Auto</td>
              <TableDataRight>{co2Car} Kg Co2</TableDataRight>
            </tr>
            <tr>
              <td>{trainKm} Km Bahn</td>
              <TableDataRight>{co2Train} Kg Co2</TableDataRight>
            </tr>
            <tr>
              <td>{flightKm} Km Flug</td>
              <TableDataRight>{co2Flight} Kg Co2</TableDataRight>
            </tr>
            <tr>
              <TableHeader>Co2 Budget</TableHeader>
            </tr>
            <tr>
              <td>Dein Jahresbudget: </td>
              <TableDataRight>1500 Kg Co2</TableDataRight>
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
        type="reset"
        onClick={() => {
          setValues(initialValues);
          setHasFormErrors(false);
        }}
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

const ErrorMessage = styled.p`
  background: var(--logo-one);
  border: 1px solid var(--color-three);
  border-radius: 5px;
  color: var(--main-background);
  font-weight: bold;
  padding: 0.3rem;
  width: fit-content;
`;

const InputSection = styled.section`
  margin-top: 0.3rem;
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
