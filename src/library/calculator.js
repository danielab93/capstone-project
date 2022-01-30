const initialValues = {
  inputCar: 0,
  inputTrain: 0,
  inputFlight: 0,
};

function isInputGreaterZero(value) {
  return value > 0;
}

function carCalculation(co2Calculation, values) {
  const totalCarKm = co2Calculation.carKm + values.inputCar;
  const co2Car = (co2Calculation.carKm + values.inputCar) * 0.119;
  const co2CarRounded = Math.round(co2Car * 100) / 100;
  const totalCo2Car = Math.round(values.inputCar * 0.119 * 100) / 100;
  return totalCarKm, co2CarRounded, totalCo2Car;
}

function trainCalculation(co2Calculation, values) {
  const totalTrainKm = co2Calculation.trainKm + values.inputTrain;
  const co2Train = (co2Calculation.trainKm + values.inputTrain) * 0.032;
  const co2TrainRounded = Math.round(co2Train * 100) / 100;
  const totalCo2Train = Math.round(values.inputTrain * 0.032 * 100) / 100;
  return totalTrainKm, co2TrainRounded, totalCo2Train;
}

function flightCalculation(co2Calculation, values) {
  const totalFlightKm = co2Calculation.flightKm + values.inputFlight;
  const co2Flight = (co2Calculation.flightKm + values.inputFlight) * 0.38;
  const co2FlightRounded = Math.round(co2Flight * 100) / 100;
  const totalCo2Flight = Math.round(values.inputFlight * 0.38 * 100) / 100;
  return totalFlightKm, co2FlightRounded, totalCo2Flight;
}

function calculateBudgetSpent(
  co2Calculation,
  totalCo2Car,
  totalCo2Train,
  totalCo2Flight
) {
  const co2BudgetSpent =
    co2Calculation.co2BudgetSpent +
    Math.round((totalCo2Car + totalCo2Train + totalCo2Flight) * 100) / 100;
  return co2BudgetSpent;
}

function calculateBudgetLeft(
  co2Calculation,
  totalCo2Car,
  totalCo2Train,
  totalCo2Flight
) {
  const co2BudgetLeft =
    co2Calculation.co2BudgetLeft -
    Math.round((totalCo2Car + totalCo2Train + totalCo2Flight) * 100) / 100;
  return co2BudgetLeft;
}

function co2CalculationFunction(value, co2Calculation, values) {
  if (isInputGreaterZero(value)) {
    return (
      carCalculation(co2Calculation, values),
      trainCalculation(co2Calculation, values),
      flightCalculation(co2Calculation, values),
      calculateBudgetSpent(
        co2Calculation,
        totalCo2Car,
        totalCo2Train,
        totalCo2Flight
      ),
      calculateBudgetLeft(
        co2Calculation,
        totalCo2Car,
        totalCo2Train,
        totalCo2Flight
      ),
      [
        ...co2Calculation,
        {
          carKm: totalCarKm,
          co2Car: co2CarRounded,

          trainKm: totalTrainKm,
          co2Train: co2TrainRounded,

          flightKm: totalFlightKm,
          co2Flight: co2FlightRounded,

          co2BudgetSpent: Math.round(co2BudgetSpent * 100) / 100,
          co2BudgetLeft: Math.round(co2BudgetLeft * 100) / 100,
        },
      ],
      initialValues
    );
  } else {
  }
}

export {
  isInputGreaterZero,
  carCalculation,
  trainCalculation,
  flightCalculation,
  calculateBudgetSpent,
  calculateBudgetLeft,
  co2Calculator,
};
