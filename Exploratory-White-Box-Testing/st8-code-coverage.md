# Step 8: Review Code Coverage

I ran the following command to generate the code coverage report:

```bash
npm test -- --coverage
```
## Coverage Results

I recorded the percentages reported by Jest for `App.tsx`.

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

## Coverage Explanation

My tests executed the statements that change the counter, including Increment, Decrement, and Reset.
I also tested the initial state and different combinations of button clicks.
There are no conditional branches or loops in this component, so branch and loop coverage are not major concerns.

I think code coverage is useful because it shows which parts of the code were executed during testing.
However, a high coverage percentage does not automatically mean the application works perfectly.
We still need to verify that the tests check the correct behavior.

## Conclusion

The coverage report helped me understand how much of the component was executed by my tests and whether any statements were missed.