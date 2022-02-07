describe("Calculator", () => {
  it("should render an inputfield", () => {
    cy.visit("/co2-rechner");
    cy.get('[name="inputCar"]').should("be.visible");
  });

  it("should show an error message if the input is not valid", () => {
    cy.visit("/co2-rechner");
    cy.get('[name="inputCar"]').type("0");
    cy.get('[data-testid="submit-btn"]').click();
    cy.get('[data-testid="error-message"]').should("be.visible");
  });
});
