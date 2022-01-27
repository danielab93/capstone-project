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
    if (
      values.inputCar > 0 ||
      values.inputTrain > 0 ||
      values.inputFlight > 0
    ) {
      const totalCarKm = co2Calculation.carKm + values.inputCar;
      const co2Car = (co2Calculation.carKm + values.inputCar) * 0.119;
      const co2CarRounded = Math.round(co2Car * 100) / 100;

      const totalCo2Car = Math.round(values.inputCar * 0.119 * 100) / 100;

      // TRAIN
      const totalTrainKm = co2Calculation.trainKm + values.inputTrain;
      const co2Train = (co2Calculation.trainKm + values.inputTrain) * 0.032;
      const co2TrainRounded = Math.round(co2Train * 100) / 100;

      const totalCo2Train = Math.round(values.inputTrain * 0.032 * 100) / 100;

      // FLIGHT
      const totalFlightKm = co2Calculation.flightKm + values.inputFlight;
      const co2Flight = (co2Calculation.flightKm + values.inputFlight) * 0.38;
      const co2FlightRounded = Math.round(co2Flight * 100) / 100;

      const totalCo2Flight = Math.round(values.inputFlight * 0.38 * 100) / 100;

      const co2BudgetSpent =
        co2Calculation.co2BudgetSpent +
        Math.round((totalCo2Car + totalCo2Train + totalCo2Flight) * 100) / 100;

      const co2BudgetLeft =
        co2Calculation.co2BudgetLeft -
        Math.round((totalCo2Car + totalCo2Train + totalCo2Flight) * 100) / 100;

      setCo2Calculation({
        ...co2Calculation,
        carKm: totalCarKm,
        co2Car: co2CarRounded,

        trainKm: totalTrainKm,
        co2Train: co2TrainRounded,

        flightKm: totalFlightKm,
        co2Flight: co2FlightRounded,

        co2BudgetSpent: Math.round(co2BudgetSpent * 100) / 100,
        co2BudgetLeft: Math.round(co2BudgetLeft * 100) / 100,
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
          <Button type="submit">Hinzufügen</Button>
        </InputSection>
      </form>
      <section>
        <Table>
          <tbody>
            <tr>
              <TableHeaderLeft>Gesamt Kilometer</TableHeaderLeft>
              <TableHeaderRight> Co2-Ausstoß</TableHeaderRight>
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
              <TableHeaderLeft>Co2 Budget</TableHeaderLeft>
            </tr>
            <tr>
              <td>Dein Jahresbudget: </td>
              <TableDataRight>1500 Kg Co2</TableDataRight>
            </tr>
            <tr>
              <td>Bereits verbraucht: </td>
              <TableDataRight
                style={{
                  color: co2Calculation.co2BudgetSpent < 1500 ? "green" : "red",
                }}
              >
                {co2Calculation.co2BudgetSpent} Kg Co2
              </TableDataRight>
            </tr>
            <tr>
              <td>Noch übrig: </td>
              <TableDataRight
                style={{
                  color: co2Calculation.co2BudgetLeft < 0 ? "red" : "green",
                }}
              >
                {co2Calculation.co2BudgetLeft} Kg Co2
              </TableDataRight>
            </tr>
          </tbody>
        </Table>
      </section>
      <Button
        type="reset"
        onClick={() => {
          setCo2Calculation(initialCalculationObject);
          setHasFormErrors(false);
        }}
      >
        Alles zurücksetzen
      </Button>
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

const TableHeaderLeft = styled.th`
  text-align: left;
`;

const TableHeaderRight = styled.th`
  text-align: right;
`;

const TableDataRight = styled.td`
  text-align: right;
  width: 45%;
`;

const Button = styled.button`
  background-color: var(--color-two);
  color: var(--logo-one);
  border: 1px solid var(--color-three);
  border-radius: 5px;
  font-size: 0.8rem;
  margin-left: 0.2rem;
  margin-top: 0.3rem;
  padding: 0.2rem;
  width: fit-content;
`;
