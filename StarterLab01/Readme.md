# Receipt Program Testing Project
Written by: Edgar

## Project Description

- This project tests a simple receipt program written in TypeScript. The program allows users to add items, delete items, calculate a subtotal, calculate tax, and print a receipt.

- The purpose of this assignment is to practice software testing, identify defects, use ESLint to check code, and correct problems in a separate file.

## Project Files

- receipt.ts — Original program containing defects for review and testing.
- fixed_receipt.ts — Corrected version of the receipt program.
- receipt.test.ts — Jest tests for the receipt functions.
- issue_log.md — List of identified issues, explanations, suggested fixes, and statuses.
- screenshots/ — Screenshots showing the test results and ESLint output.
- README.md — Project description and instructions.

## Technologies Used

- TypeScript
- Jest
- ts-jest
- ESLint
- Node.js
- npm

## Installation

- Make sure Node.js and npm are installed.
- Install the project dependencies by running:
- npm install
- If dependencies have not been installed yet, run:
- npm install --save-dev jest ts-jest typescript @types/jest @types/node eslint typescript-eslint @jest/globals

## Running the Tests
- Run the Jest tests with:
- npx jest receipt.test.ts
- The tests check receipt functions, including adding items, deleting items, calculating totals, calculating tax, and printing the receipt.

## Running ESLint
- Check the original program:
- npx eslint ./receipt.ts
- Check the corrected program:
- npx eslint ./fixed_receipt.ts
- The original file may produce errors because it contains intentional defects. The corrected file should pass the configured ESLint checks.

## Project Goals

- Review the original code and identify defects.
- Write tests for normal, invalid, and edge-case inputs.
- Run ESLint and document its findings.
- Correct the defects in fixed_receipt.ts.
- Run the tests against the corrected code.
