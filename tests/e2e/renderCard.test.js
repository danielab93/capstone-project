describe("Restaurantpage", () => {
  it("should render a cardtitle", () => {
    cy.visit("/restaurants");
    cy.get("section h3").contains("Bodhi");
  });
  it("should render a svg", () => {
    cy.visit("/restaurants");
    cy.get("section svg");
  });
  it("should render an image", () => {
    cy.visit("/restaurants");
    cy.get("section div div img").should("be.visible");
  });
  it("should render a text", () => {
    cy.visit("/restaurants");
    cy.get("section div ul li").contains("Authentische asiatische Rezepte");
  });
  it("should render a button", () => {
    cy.visit("/restaurants");
    cy.get("section button").contains("Mehr Infos");
  });
  it("should show more infos when the button is clicked", () => {
    cy.visit("/restaurants");
    cy.get('[data-testid="toggle-btn"]').click({ multiple: true });
    cy.get('[data-testid="location-info"]').contains("Standort");
  });
});
