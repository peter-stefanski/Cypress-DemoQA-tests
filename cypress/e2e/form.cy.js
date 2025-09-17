describe("DemoQA Prectice Form", () => {
  beforeEach(function () {
    cy.fixture("users").then((users) => {
      this.user = users.user1;
    });
  });

  it("Fill the form with custom command", function () {
    const user = this.user;

    cy.visit("/automation-practice-form");

    cy.get("#firstName").type(user.firstName);
    cy.get("#lastName").type(user.lastName);
    cy.get("#userEmail").type(user.email);

    cy.contains("label", user.gender).click();

    cy.get("#userNumber").type(user.mobile);

    h;
    cy.get("#dateOfBirthInput").click();
    cy.get(".react-datepicker__month-select").select(user.dataOfBirth.month);
    cy.get(".react-datepicker__year-select").select(user.dataOfBirth.year);
    cy.get(`.react-datepicker__day--0${user.dataOfBirth.day}`)
      .not(".react-datepicker__day--outside-month")
      .click();

    user.subjects.forEach((subject) => {
      cy.get("#subjectsInput").type(`${subject}{enter}`);
    });

    user.hobbies.forEach((hobby) => {
      cy.contains("label", hobby).click();
    });

    cy.get("#uploadPicture").attachFile(user.picture);

    cy.get("#uploadPicture").attachFile(user.picture);

    cy.get("#state").click();
    cy.get(".css-26l3qy-menu").contains(user.state).click();
    cy.get("#city").click();
    cy.get(".css-1uccc91-singleValue").contains(user.state).click();

    cy.get("#submit").click();

    cy.get(".modal-content").should("be.visible");
    cy.contains("td", user.firstName).should("exist");
    cy.contains("td", user.lastName).should("exist");

    cy.get("#adplus-anchor").invoke("remove");
    cy.get("#closeLargeModal").scrollIntoView().should("be.visible").click();
  });
});
