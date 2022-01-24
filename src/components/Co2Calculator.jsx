import styled from "styled-components";
import { useEffect, useState } from "react";
import { saveToLocal, loadFromLocal } from "../library/localStorage";
import NumberInput from "./NumberInput";
/* import isProductValid from "../library/validation"; */

function Co2Calculator() {
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

  const initialCalculationObject = {
    carKm: 0,
    trainKm: 0,
    flightKm: 0,
    co2Car: 0,
    co2Train: 0,
    co2Flight: 0,
    co2BudgetSpent: 0,
    co2BudgetLeft: 1500,
  };

  const localStorageCo2Calculation = loadFromLocal("co2calculation");
  const [co2Calculation, setCo2Calculation] = useState(
    localStorageCo2Calculation ?? initialCalculationObject
  );
  useEffect(() => {
    saveToLocal("co2calculation", co2Calculation);
  }, [co2Calculation]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.inputCar > 0) {
      const totalCarKm = co2Calculation.carKm + values.inputCar;
      const co2Car = (co2Calculation.carKm + values.inputCar) * 0.119;
      const co2CarRounded = Math.round(co2Car * 100) / 100;
      const co2BudgetSpent =
        Math.round(
          (co2Calculation.co2BudgetSpent + values.inputCar * 0.119) * 100
        ) / 100;
      const co2BudgetLeft =
        Math.round(
          (co2Calculation.co2BudgetLeft - values.inputCar * 0.119) * 100
        ) / 100;
      setCo2Calculation({
        ...co2Calculation,
        carKm: totalCarKm,
        co2Car: co2CarRounded,
        co2BudgetSpent: co2BudgetSpent,
        co2BudgetLeft: co2BudgetLeft,
      });
      setValues(initialValues);
      setHasFormErrors(false);
    } else if (values.inputTrain > 0) {
      const totalTrainKm = co2Calculation.trainKm + values.inputTrain;
      const co2Train = (co2Calculation.trainKm + values.inputTrain) * 0.032;
      const co2TrainRounded = Math.round(co2Train * 100) / 100;
      const co2BudgetSpent =
        Math.round(
          (co2Calculation.co2BudgetSpent + values.inputTrain * 0.032) * 100
        ) / 100;
      const co2BudgetLeft =
        Math.round(
          (co2Calculation.co2BudgetLeft - values.inputTrain * 0.032) * 100
        ) / 100;

      setCo2Calculation({
        ...co2Calculation,
        trainKm: totalTrainKm,
        co2Train: co2TrainRounded,
        co2BudgetSpent: co2BudgetSpent,
        co2BudgetLeft: co2BudgetLeft,
      });
      setValues(initialValues);
      setHasFormErrors(false);
    } else if (values.inputFlight > 0) {
      const totalFlightKm = co2Calculation.flightKm + values.inputFlight;
      const co2Flight = (co2Calculation.flightKm + values.inputFlight) * 0.38;
      const co2FlightRounded = Math.round(co2Flight * 100) / 100;
      const co2BudgetSpent =
        Math.round(
          (co2Calculation.co2BudgetSpent + values.inputFlight * 0.38) * 100
        ) / 100;
      const co2BudgetLeft =
        Math.round(
          (co2Calculation.co2BudgetLeft - values.inputFlight * 0.38) * 100
        ) / 100;

      setCo2Calculation({
        ...co2Calculation,
        flightKm: totalFlightKm,
        co2Flight: co2FlightRounded,
        co2BudgetSpent: co2BudgetSpent,
        co2BudgetLeft: co2BudgetLeft,
      });
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
              <td>{co2Calculation.carKm} Km Auto</td>
              <TableDataRight>{co2Calculation.co2Car} Kg Co2</TableDataRight>
            </tr>
            <tr>
              <td>{co2Calculation.trainKm} Km Bahn</td>
              <TableDataRight>{co2Calculation.co2Train} Kg Co2</TableDataRight>
            </tr>
            <tr>
              <td>{co2Calculation.flightKm} Km Flug</td>
              <TableDataRight>{co2Calculation.co2Flight} Kg Co2</TableDataRight>
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
              <TableDataRight>
                {co2Calculation.co2BudgetSpent} Kg Co2
              </TableDataRight>
            </tr>
            <tr>
              <td>Noch übrig: </td>
              <TableDataRight>
                {co2Calculation.co2BudgetLeft} Kg Co2
              </TableDataRight>
            </tr>
          </tbody>
        </Table>
      </section>
      <button
        type="reset"
        onClick={() => {
          setCo2Calculation(initialCalculationObject);
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
