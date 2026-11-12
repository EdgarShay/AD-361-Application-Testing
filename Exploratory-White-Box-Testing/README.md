# Exploratory White Box testing- Counter Application
Written by: Edgar
## Project Overview

For this assignment, I tested a simple React counter application using exploratory testing and white-box testing.

The goal was to understand how the application works, test its buttons, and use code coverage to evaluate my tests.

## Topics

- Exploratory testing
- White-box testing
- Statement coverage
- Code coverage
- React component testing

## Tools and Technologies

- React
- TypeScript
- Jest
- React Testing Library
- Vite
- Visual Studio Code

## Application Features

The counter application has three buttons:

- **Increment:** Increases the count by one.
- **Decrement:** Decreases the count by one.
- **Reset:** Changes the count back to zero.

The starting value is 0.

## Project Structure

```text
counter-app/
│
├── src/
│   ├── App.tsx
│   └── App.test.tsx
│
├── st1-exploratory-testing.md
├── st2-source-code.md
├── st3-6-react-testing.md
├── st7-test-results.md
├── st8-code-coverage.md
├── st9-comparison.md
│
├── jest.config.cjs
├── tsconfig.json
├── tsconfig.test.json
├── vite.config.ts
├── package.json
└── README.md
```

## How to Install and Run the Project

First, install the dependencies:

```bash
npm install
```

Run the application:

```bash
npm run dev
```

Run the tests:

```bash
npm test
```

Generate the code coverage report:

```bash
npm test -- --coverage
```

## Assignment Steps

### Step 1: Exploratory Testing

See (st1-exploratory-testing.md).

This file contains the testing charter and the results of five exploratory tests.

### Step 2: Examine the Source Code

See (st2-source-code.md).

This file explains the starting value, statements, branches, and loops.

### Steps 3–6: React Component Testing

See (st3-6-react-testing.md).

This file explains the React tests, starting state, statement coverage, and action sequences.

### Step 7: Run the Tests

See (st7-test-results.md).

This file contains the test results and screenshot.

### Step 8: Review Code Coverage

See (st8-code-coverage.md).

This file contains the coverage percentages, screenshot, and explanation.

### Step 9: Compare the Two Approaches

See (st9-comparison.md).

This file compares exploratory testing and white-box testing.

## Final Conclusion

This assignment helped me understand the difference between exploratory testing and white-box testing.
I learned how to test React components using Jest and React Testing Library.
I also learned how to use code coverage to check which parts of the application were executed during testing.
Overall, I think combining both testing approaches is useful because they help identify different types of problems
and improve confidence in the application.
