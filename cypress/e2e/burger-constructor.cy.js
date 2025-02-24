/* eslint-disable cypress/no-unnecessary-waiting */
const testUrl = "http://localhost:3000";

describe("drag and drop tests", () => {
  beforeEach(() => {
    cy.visit(testUrl);
    cy.intercept("GET", "https://norma.nomoreparties.space/api/ingredients", {
      fixture: "ingredients.json",
    });
  });
  it("should drag and drop bun", () => {
    cy.get("[data-cy=ingredient]").as("ingredient");
    cy.get("[data-cy=constructor]").as("constructor");
    Cypress.Commands.add("drag", (name) => {
      cy.get("@ingredient").contains(name).trigger("dragstart");
    });
    Cypress.Commands.add("drop", () => {
      cy.get("@constructor").trigger("drop");
    });

    cy.wait(1000);
    cy.drag("Булка 1");
    cy.wait(1000);
    cy.drop();

    cy.get("[data-cy=constructor-bun-top]").as("constructor-bun-top");
    cy.get("[data-cy=constructor-bun-bottom]").as("constructor-bun-bottom");

    cy.get("@constructor-bun-top").should("contain", "Булка 1");
    cy.get("@constructor-bun-bottom").should("contain", "Булка 1");
    cy.get("@ingredient")
      .contains("Булка 1")
      .find("[data-cy=counter]")
      .should("contain", 2);

    cy.drag("Булка 2");
    cy.drop();

    cy.get("@constructor-bun-top").should("contain", "Булка 2");
    cy.get("@constructor-bun-bottom").should("contain", "Булка 2");
    cy.get("@ingredient")
      .contains("Булка 2")
      .find("[data-cy=counter]")
      .should("contain", 2);
    cy.get("@ingredient")
      .contains("Булка 1")
      .find("[data-cy=counter]")
      .should("not.exist");
  });

  it("should drag and drop ingredient", () => {
    cy.get("[data-cy=ingredient]").as("ingredient");
    cy.get("[data-cy=constructor]").as("constructor");
    Cypress.Commands.add("drag", (name) => {
      cy.get("@ingredient").contains(name).trigger("dragstart");
    });
    Cypress.Commands.add("drop", () => {
      cy.get("@constructor").trigger("drop");
    });

    cy.drag("Ингредиент 1");
    cy.drop();

    cy.get("[data-cy=constructor-ingredient]").as("constructor-ingredient");

    cy.get("@constructor-ingredient").last().should("contain", "Ингредиент 1");
    cy.get("@constructor-ingredient").should("have.length", 1);
    cy.get("@ingredient")
      .contains("Ингредиент 1")
      .find("[data-cy=counter]")
      .should("contain", 1);

    cy.drag("Ингредиент 2");
    cy.drop();

    cy.get("@constructor-ingredient").last().should("contain", "Ингредиент 2");
    cy.get("@constructor-ingredient").should("have.length", 2);
    cy.get("@ingredient")
      .contains("Ингредиент 2")
      .find("[data-cy=counter]")
      .should("contain", 1);

    cy.drag("Ингредиент 2");
    cy.drop();

    cy.get("@constructor-ingredient").last().should("contain", "Ингредиент 2");
    cy.get("@constructor-ingredient").should("have.length", 3);
    cy.get("@ingredient")
      .contains("Ингредиент 2")
      .find("[data-cy=counter]")
      .should("contain", 2);
  });
});

describe("ingredient modal tests", () => {
  beforeEach(() => {
    cy.visit(testUrl);
    cy.intercept("GET", "https://norma.nomoreparties.space/api/ingredients", {
      fixture: "ingredients.json",
    });
  });

  it("should modal open", () => {
    cy.get("[data-cy=ingredient]").contains("Булка 1").click();
    cy.get("[data-cy=modal]").should("contain", "Детали ингредиента");
    cy.get("[data-cy=ingredient-card-name]").should("contain", "Булка 1");
  });
  it("should modal close by click button", () => {
    cy.get("[data-cy=ingredient]").contains("Булка 1").click();
    cy.get("[data-cy=modal]").as("modal");
    cy.get("@modal").should("contain", "Детали ингредиента");
    cy.get("[data-cy=modal-close-icon]").click();
    cy.get("@modal").should("not.exist");
  });
  it("should modal close by click overlay", () => {
    cy.get("[data-cy=ingredient]").contains("Булка 1").click();
    cy.get("[data-cy=modal]").as("modal");
    cy.get("@modal").should("contain", "Детали ингредиента");
    cy.get("[data-cy=modal-overlay]").click(0, 0);
    cy.get("@modal").should("not.exist");
  });
  it("should modal close by press key Escape", () => {
    cy.get("[data-cy=ingredient]").contains("Булка 1").click();
    cy.get("[data-cy=modal]").as("modal");
    cy.get("@modal").should("contain", "Детали ингредиента");
    cy.get("body").type("{esc}");
    cy.get("@modal").should("not.exist");
  });
});

describe("order create tests", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://norma.nomoreparties.space/api/ingredients", {
      fixture: "ingredients.json",
    });
    cy.intercept("POST", "https://norma.nomoreparties.space/api/auth/login", {
      fixture: "login.json",
    });
    cy.intercept("POST", "https://norma.nomoreparties.space/api/orders", {
      fixture: "order.json",
    });
    cy.visit(`${testUrl}/login`);
    cy.get("[data-cy=login-submit-button]").click();
  });

  afterEach(() => {
    cy.clearLocalStorage();
  });

  it("should create order", () => {
    cy.get("[data-cy=ingredient]").as("ingredient");
    cy.get("[data-cy=constructor]").as("constructor");
    Cypress.Commands.add("drag", (name) => {
      cy.get("@ingredient").contains(name).trigger("dragstart");
    });
    Cypress.Commands.add("drop", () => {
      cy.get("@constructor").trigger("drop");
    });

    cy.drag("Булка 1");
    cy.drop();
    cy.drag("Ингредиент 1");
    cy.drop();
    cy.drag("Соус 1");
    cy.drop();
    cy.get("[data-cy=order-button]").click();
    cy.get("[data-cy=order-datails-number]").should("contain", 12345);
    cy.get("[data-cy=modal-close-icon]").click();
    cy.get("[data-cy=modal]").should("not.exist");
    cy.get("[data-cy=constructor-bun-top]").should("not.exist");
    cy.get("[data-cy=constructor-bun-bottom]").should("not.exist");
    cy.get("[data-cy=constructor-ingredient]").should("not.exist");
  });
});
