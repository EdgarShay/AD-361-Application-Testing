# Todo-App – White Box Testing
Written by: Edgar
## Overview

For this assignment, I practiced white-box testing using a small Todo List application built with React and TypeScript.
The goal was to review the source code first and then create tests based on how the functions work.
I focused on statement coverage, branch coverage, and loop coverage.
I also practiced organizing test cases into test suites inside one test file.

## Learning Objectives

In this practice, I worked on:

- Organizing related test cases into test suites and files.
- Testing every statement in a function.
- Testing both outcomes of an `if` statement.
- Testing loops with zero, one, and several items.
- Using Jest coverage reports to check which parts of the code were tested.

## Application Description

The application is a simple Todo List. It allows users to:

- Add new tasks.
- Prevent blank tasks from being added.
- Mark tasks as completed using checkboxes.
- See how many tasks are completed.

The application does not use a backend or routing.

## Source Code

The main files used in this assignment are:

| File | Description |
|---|---|
| `src/todoUtils.ts` | Contains the Todo type and three functions to test. |
| `src/App.tsx` | React component that displays the Todo List. |
| `src/todoUtils.test.ts` | Contains all test cases and test suites. |

**Note:** Only `todoUtils.ts` is tested in this assignment.

## Testing Techniques

### 1. Statement Coverage – `createTodo()`

I tested the `createTodo()` function by creating a todo with sample text.

I checked that:
- The text was correct.
- The `done` property started as `false`.
- The ID was a number.

One test was enough to execute the function's statement because it does not contain any branches or loops.

### 2. Branch Coverage – `addTodo()`

I tested both outcomes of the `if` statement inside `addTodo()`.

- Blank or whitespace-only text should return the original list without adding a task.
- Valid text should create and add a new todo.

I also tested that extra spaces around valid text are removed.

### 3. Loop Coverage – `countDone()`

I tested the `countDone()` function with three different situations:

- An empty list, where the loop runs zero times.
- One completed todo, where the loop runs once.
- Several todos, where the loop runs multiple times.

I also checked that only completed todos were counted.

## Test Organization

All tests are organized in one file: `src/todoUtils.test.ts`.

The file contains three test suites:

| Test Suite | Function | Test Cases |
|---|---|---:|
| `createTodo statement coverage` | `createTodo()` | 1 |
| `addTodo branch coverage` | `addTodo()` | 3 |
| `countDone loop coverage` | `countDone()` | 3 |
| **Total** | | **7** |

I used Jest's `describe()`, `it()`, and `expect()` functions to organize and check the tests.

## Tools and Technologies

- React
- TypeScript
- Vite
- Jest
- ts-jest
- Node.js
- Visual Studio Code
- Git and GitHub

## How to Run the Application

First, install the project dependencies:

```bash
npm install
```

Start the application:

```bash
npm run dev
```

Open the local address provided by Vite in your browser.

## How to Run the Tests

Run all test cases:

```bash
npm test
```

## How to Generate the Coverage Report

Run:

```bash
npm run coverage
```

The coverage report displays:

- Statement coverage (`% Stmts`)
- Branch coverage (`% Branch`)
- Function coverage (`% Funcs`)
- Line coverage (`% Lines`)

The HTML coverage report can also be opened from:

```text
coverage/lcov-report/index.html
```

## Coverage Results

The goal of this assignment is to reach 100% statement, branch, function, and line coverage for `todoUtils.ts`.

--------|---------|----------|---------|---------|-------------------
File    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------|---------|----------|---------|---------|-------------------
...iles |     100 |      100 |     100 |     100 |
 ....ts |     100 |      100 |     100 |     100 |
--------|---------|----------|---------|---------|-------------------

## Coverage Experiment

As part of the assignment, I temporarily commented out the blank-text test in the `addTodo()` suite and ran the coverage report again.
The branch coverage decreased because the blank-text outcome was no longer tested.
After the experiment, I restored the test and ran coverage again.

This helped me understand why testing both outcomes of a decision is important.

## Screenshots

The `screenshots` folder contains evidence of the test execution and coverage report.

```text
screenshots/
├── Screenshot-test-results.png
└── Screenshot-coverage-report.png
```

## Conclusion

This assignment helped me understand how white-box testing works. I learned how statement coverage,
branch coverage, and loop coverage are different. I also learned how to organize tests into suites
and use Jest to check which parts of the source code were executed.
For me, the most important part was learning that passing tests is not enough.
We also need to check whether our tests cover the important parts of the code.
