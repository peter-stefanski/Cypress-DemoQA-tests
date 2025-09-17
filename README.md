# Cypress E2E Tests – DemoQA

## Description
This repository contains end-to-end tests written in **Cypress** for the DemoQA application.  
The tests cover, among others:
- interacting with forms, checkboxes, radio buttons, file uploads, tables, and dropdowns,
- parameterized tests with different data sets,
- working with dynamic lists and elements using `.find()`, `.eq()`,
- assertions on dynamic UI elements.

Demo site: [DemoQA](https://demoqa.com)

---

## Requirements
- [Node.js](https://nodejs.org/) (>= 16)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## Installation
Clone the repository and install dependencies:


git clone https://github.com/<your-repo>.git
cd <your-repo>
npm install

# Running Cypress Tests

## Open Cypress Test Runner (Interactive Mode)

npx cypress open

##Run Cypress in Headless Mode (CLI)
npx cypress run

## Base URL

- Make sure your TodoMVC React app is running locally.

- Default URL used in tests:

https://demoqa.com

- You can change this in cypress.config.js if needed.

## Notes

- Ensure the app is accessible before executing tests.

- Use data-testid or other reliable selectors in your tests.

- Test data can be adjusted in Cypress fixtures.

- Parameterize tests for different table rows or form inputs.

- Use .find(), .eq(), and other Cypress commands for dynamic lists.

- Assertions should cover dynamic elements and edge cases.
