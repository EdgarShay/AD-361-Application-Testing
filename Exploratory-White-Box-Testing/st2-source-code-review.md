# Step 2: Examine the Source Code

## Source Code Review

I reviewed the App.tsx file to understand how the counter works.

### 1. Starting value

The starting value of `count` is `0`.

```tsx
const [count, setCount] = useState(0);
```

### 2. Statements that change count

| Statement | User Action | Expected Result |
|---|---|---|
| `setCount(count + 1)` | Click Increment | Adds 1 to the count. |
| `setCount(count - 1)` | Click Decrement | Subtracts 1 from the count. |
| `setCount(0)` | Click Reset | Changes the count back to 0. |

### 3. Branches and loops

The component does not contain any `if` or `else` statements, so there are no conditional branches to test.

It also does not contain any loops, such as `for` or `while` loops.
Therefore, branch coverage and loop coverage do not really apply to this component.

### 4. Testing approach

After reviewing the code, I can create tests for each statement that changes the count.
I will also test different sequences of button clicks to verify that the React component
updates its displayed state correctly.
