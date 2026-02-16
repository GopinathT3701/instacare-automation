<<<<<<< HEAD
# Instacare Automation

This project follows a Playwright Page Object Model (POM) structure.

## Folder Structure

- `tests/e2e/` — end-to-end business flow tests (service, patient, booking).
- `tests/smoke/` — quick smoke checks (login/basic app launch).
- `pages/` — page-level objects and navigation methods.
- `Sections/` — reusable form/section-level objects grouped by feature.
- `utils/` — shared test data and helper utilities.

## Run Tests

```bash
npm run test:list
npm run test
npm run test:headed
```

> Note: Tests currently target `https://dev-admin.myinstacare.com/` and use credentials/data in test files and `utils/testData.ts`.
=======
# Instacare-automation
>>>>>>> 08b687b9bea5bf335f1b59a88445ebdd296921d3
