import { carCalculation } from "./calculator";

describe("CO2 Car Consumption", () => {
  it("should add the driven kilometers to the total of kms", () => {
    const result = carCalculation(50, 100);
    expect(result[0]).toEqual(150);
  });
  it("should calculate the right amount of CO2 ………", () => {
    const [totalCarKm, co2Rounded] = carCalculation(50, 100);
    expect(totalCarKm).toEqual(150);
    expect(co2Rounded).toBe(17.85);
  });
  it("should round …", () => {
    const [totalCarKm, ,] = carCalculation(0.77, 0.9);
    expect(totalCarKm).toBe(0.77);
  });
});
