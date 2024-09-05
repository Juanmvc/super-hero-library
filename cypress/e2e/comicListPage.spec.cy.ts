describe("Hero list page", () => {
    beforeEach(() => {
    //Hero for testing purposes 3-D Man
      cy.visit("/hero/1011334"); 
    });
  
    it("It should display the page", () => {
      cy.get('[data-testid="comic-list-page"]').should("be.visible");
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
  
    it("It should show the list of comics", () => {
      cy.get('[data-testid="comic-list-slider"]').should("be.visible");
    });

    it("It should show the comic slider with at least one comic", () => {
        cy.get('[data-testid="comic-list-slider"]').should("be.visible");
        
        cy.get('[data-testid="comic-list-slider"]')
          .children()
          .should("have.length.at.least", 1);
        
        cy.get('[data-testid="comic-list-slider"]')
          .children()
          .first()
          .should("be.visible")
          .and("contain.text", "Avengers: The Initiative (2007) #14");
      });
  
  });
  