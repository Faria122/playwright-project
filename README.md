# Playwright E2E Test Suite - TodoMVC

Automated end-to-end tests for the TodoMVC React app using Playwright.

## What This Tests
- Adding todo items
- Marking todos as complete
- Deleting todos
- UI assertions and element visibility

## Tech Stack
- Playwright
- JavaScript
- GitHub Actions (CI/CD)

## How to Run
- npm install
- npx playwright test

## CI/CD
Tests run automatically on every push via GitHub Actions.

## Reports
 Run with HTML report:
- npx playwright test --reporter=html
- npx playwright show-report
