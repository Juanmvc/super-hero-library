describe("Hero list page", () => {
  beforeEach(() => {
    cy.visit("/"); 
  });

  it("It should display the page", () => {
    cy.get('[data-testid="hero-list-page"]').should("be.visible");
  });

  it("It should show the navbar", () => {
    cy.get('[data-testid="test-navbar"]').should("be.visible");
  });

  it("Navbar icon link should be clickable", () => {
    cy.get('[data-testid="test-navbar-icon-link"]').click().then(() => {
      cy.url().should('include', '/favorites');
    });
  });

  it("Navbar logo link should be clickable", () => {
    cy.get('[data-testid="test-navbar-logo-link"]').click().then(() => {
      cy.url().should('include', '/');
    });
  });

  it("It should show the hero filter", () => {
    cy.get('[data-testid="test-hero-filter"]').should("be.visible");
  });

  it("It should show the list of heroes", () => {
    cy.get('[data-testid="test-hero-list-grid"]').should("be.visible");
  });

  it("It should show the hero filter and allow typing", () => {
    cy.get('[data-testid="input"]').should("be.visible").type("Spider");
  });

  it("Hero list should change after filter input", () => {
    cy.get('[data-testid="input"]').should("be.visible").type("Spider");
    
    cy.wait(15000);

    cy.get('[data-testid="test-hero-list-grid"]')
      .children()
      .should("have.length.at.least", 1); 
    
    cy.get('[data-testid="test-hero-list-grid"]')
      .contains("Spider")
      .should("be.visible");
  });

});
