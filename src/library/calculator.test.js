import {
  carCalculation,
  trainCalculation,
  flightCalculation,
  calculateBudgetSpent,
  calculateBudgetLeft,
} from "./calculator";

describe("Calculate Co2 Car Consumption", () => {
  it("should add the driven kilometers to the total car kms", () => {
    const [totalCarKm] = carCalculation(50, 100);
    expect(totalCarKm).toEqual(150);
  });
  it("should calculate the right Co2 Emissions for cars", () => {
    const [totalCarKm, co2Rounded] = carCalculation(50, 100);
    expect(totalCarKm).toEqual(150);
    expect(co2Rounded).toEqual(17.85);
  });
  it("should round the total car km", () => {
    const [totalCarKm] = carCalculation(0.77, 0.9);
    expect(totalCarKm).toEqual(1.67);
  });
});

describe("Calculate Co2 Train Consumption", () => {
  it("should add the driven kilometers to the total train kms", () => {
    const [totalTrainKm] = trainCalculation(223, 476);
    expect(totalTrainKm).toEqual(699);
  });
  it("should calculate the right Co2 Emissions for trainrides", () => {
    const [totalTrainKm, co2Rounded] = trainCalculation(223, 476);
    expect(totalTrainKm).toEqual(699);
    expect(co2Rounded).toEqual(22.37);
  });
  it("should round the total train km", () => {
    const [totalTrainKm] = trainCalculation(127.54, 298.03);
    expect(totalTrainKm).toEqual(425.57);
  });
});

describe("Calculate Co2 Flight Consumption", () => {
  it("should add the driven kilometers to the total flight kms", () => {
    const [totalFlightKm] = flightCalculation(567, 243);
    expect(totalFlightKm).toEqual(810);
  });
  it("should calculate the right Co2 Emissions for flights", () => {
    const [totalFlightKm, co2Rounded] = flightCalculation(567, 243);
    expect(totalFlightKm).toEqual(810);
    expect(co2Rounded).toEqual(307.8);
  });
  it("should round the total flight km", () => {
    const [totalFlightKm] = flightCalculation(545.28, 983.56);
    expect(totalFlightKm).toEqual(1528.84);
  });
});

describe("Calculate Budget", () => {
  it("should calculate the already consumed budget", () => {
    const co2BudgetSpent = calculateBudgetSpent(500, 567, 243, 436);
    expect(co2BudgetSpent).toBe(1746);
  });
  it("should calculate the leftover budget", () => {
    const co2BudgetLeft = calculateBudgetLeft(1500, 167, 243, 536);
    expect(co2BudgetLeft).toBe(554);
  });
});
