function calculateCo2(co2Calculation, values) {
  const [totalCarKm, co2CarRounded, totalCo2Car] = carCalculation(
    co2Calculation.carKm,
    values.inputCar
  );

  const [totalTrainKm, co2TrainRounded, totalCo2Train] = trainCalculation(
    co2Calculation.trainKm,
    values.inputTrain
  );

  const [totalFlightKm, co2FlightRounded, totalCo2Flight] = flightCalculation(
    co2Calculation.flightKm,
    values.inputFlight
  );

  const [co2BudgetSpent, co2BudgetLeft] = calculateBudget(
    co2Calculation,
    totalCo2Car,
    totalCo2Train,
    totalCo2Flight
  );

  return {
    carKm: Math.round(totalCarKm * 100) / 100,
    co2Car: co2CarRounded,

    trainKm: Math.round(totalTrainKm * 100) / 100,
    co2Train: co2TrainRounded,

    flightKm: Math.round(totalFlightKm * 100) / 100,
    co2Flight: co2FlightRounded,

    co2BudgetSpent: co2BudgetSpent,
    co2BudgetLeft: co2BudgetLeft,
  };
}

function carCalculation(totalKm, value) {
  return calculateCo2Emission(totalKm, value, "car");
}

function trainCalculation(totalKm, value) {
  return calculateCo2Emission(totalKm, value, "train");
}

function flightCalculation(totalKm, value) {
  return calculateCo2Emission(totalKm, value, "flight");
}

function calculateCo2Emission(totalKm, value, transportationType) {
  const co2Factor = co2Average(transportationType);
  const co2 = (totalKm + value) * co2Factor;
  const co2Rounded = Math.round(co2 * 100) / 100;
  const totalCo2 = Math.round(value * co2Factor * 100) / 100;
  return [totalKm + value, co2Rounded, totalCo2];
}

function co2Average(transportationType) {
  const co2Factors = {
    car: 0.119,
    train: 0.032,
    flight: 0.38,
  };
  return co2Factors[transportationType];
}

function calculateBudget(
  co2Calculation,
  totalCo2Car,
  totalCo2Train,
  totalCo2Flight
) {
  const co2BudgetSpent = calculateBudgetSpent(
    co2Calculation.co2BudgetSpent,
    totalCo2Car,
    totalCo2Train,
    totalCo2Flight
  );

  const co2BudgetLeft = calculateBudgetLeft(
    co2Calculation.co2BudgetLeft,
    totalCo2Car,
    totalCo2Train,
    totalCo2Flight
  );
  return [
    Math.round(co2BudgetSpent * 100) / 100,
    Math.round(co2BudgetLeft * 100) / 100,
  ];
}

function calculateBudgetSpent(
  co2BudgetSpent,
  totalCo2Car,
  totalCo2Train,
  totalCo2Flight
) {
  return co2BudgetSpent + (totalCo2Car + totalCo2Train + totalCo2Flight);
}

function calculateBudgetLeft(
  co2BudgetLeft,
  totalCo2Car,
  totalCo2Train,
  totalCo2Flight
) {
  return co2BudgetLeft - (totalCo2Car + totalCo2Train + totalCo2Flight);
}

export {
  calculateCo2,
  carCalculation,
  trainCalculation,
  flightCalculation,
  calculateBudget,
  calculateBudgetSpent,
  calculateBudgetLeft,
};
