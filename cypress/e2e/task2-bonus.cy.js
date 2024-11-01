describe("QA task 2 Bonus", () => {
  it("Add product Practice Iframe version", () => {
    // Visit the page with the iframe
    cy.visit("/practice-iframe");

    cy.get("h2").should("contain.text", "IFrame");

    cy.frameLoaded('[data-testid="iframe"]');

    cy.iframe().within(() => {
      cy.getDataTest("banner-text").should(
        "contain.text",
        "ADVERTISE YOUR PRODUCT / SERVICE HERE: Contact me on X"
      );
      cy.get("table").should("have.class", "product-list-table");

      // Navigate to the Add Product page
      cy.getDataTest("navbar-addproduct")
        .should("have.text", "Add Product")
        .and("have.attr", "href", "/add-product")
        .click();

      cy.get("div").should("contain.text", "Add Product");

      cy.getDataTest("product-textbox")
        .should("have.attr", "type", "text")
        .and("have.attr", "placeholder", "Enter a product name")
        .and("have.attr", "required", "required")
        .type("Test");

      cy.getDataTest("price-textbox")
        .should("have.attr", "type", "text")
        .and("have.attr", "placeholder", "Enter a price")
        .and("have.attr", "required", "required")
        .type(1);

      cy.getDataTest("date-stocked")
        .should("have.attr", "type", "date")
        .type("2024-10-31");

      // Submit form
      cy.getDataTest("submit-form")
        .should("have.attr", "type", "submit")
        .and("have.text", "Submit")
        .click();

      // Verify the product was added
      cy.getDataTest("product-row-12").within(() => {
        cy.getDataTest("id").should("contain.text", "12");
        cy.getDataTest("name").should("contain.text", "Test");
        cy.getDataTest("price").should("contain.text", "1");
        cy.getDataTest("dateStocked").should("contain.text", "2024-10-31");
      });
    });
  });
});
