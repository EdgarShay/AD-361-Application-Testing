# Step 7: Run the Tests

I ran the test suite using the following command:

```bash
npm test
```

## Test Results

The test suite should verify the following:

- Initial count and buttons.
- Increment functionality.
- Decrement functionality.
- Reset functionality.
- Multiple actions in sequence.

**Test results:**

 Counter Application
    √ displays the starting count and all buttons (59 ms)
    √ increases the count from 0 to 1 (12 ms)
    √ decreases the count from 0 to -1 (7 ms)
    √ resets the count back to 0 (12 ms)
    √ handles multiple actions in sequence (11 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 App.tsx  |     100 |      100 |     100 |     100 |

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        4.99 s
Ran all test suites.

## Conclusion

Running the tests helps me verify that the counter works as expected.
If a test fails, I need to review the error and investigate the problem before completing the assignment.
