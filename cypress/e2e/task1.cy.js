describe("QA task 1", () => {
  it("navigate to the YouTube page", () => {
    // visit the page
    cy.visit("/");

    cy.getDataTest("banner-text").should(
      "contain.text",
      "ADVERTISE YOUR PRODUCT / SERVICE HERE: Contact me on X"
    );

    // Navigate to the YouTube page
    cy.getDataTest("navbar-learn")
      .should("have.text", "Learn")
      .and("have.attr", "href", "https://www.youtube.com/@commitquality")
      .invoke("removeAttr", "target")
      .click();

    // Check if the page is redirected to the correct youtube page
    cy.origin("https://www.youtube.com", () => {
      cy.get("h1.dynamic-text-view-model-wiz__h1").should(
        "contain.text",
        "CommitQuality"
      );
    });
  });
});
