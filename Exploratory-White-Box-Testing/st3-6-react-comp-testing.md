# Steps 3–6: React Component Testing

## Step 3: Create the Test File

I created `src/App.test.tsx` to test the counter application using React Testing Library and Jest.

I used:

- `render` to display the React component.
- `screen` to find the count and buttons.
- `fireEvent` to simulate button clicks.
- Jest assertions to check the expected results.

I organized my tests inside a `describe` block.

## Step 4: Test the Starting State

I created a test to verify that the counter starts at 0.

I also checked that the Increment, Decrement, and Reset buttons appear on the screen.

## Step 5: Test Statement Coverage

I created tests to execute each statement that changes the count.

- Increment changes the count from 0 to 1.
- Decrement changes the count from 0 to -1.
- Reset changes the count back to 0 after the count has been changed.

## Step 6: Test a Sequence of Actions

I created an additional test that performs multiple actions in sequence.

The test performs these actions:

1. Increment: count becomes 1.
2. Increment: count becomes 2.
3. Decrement: count becomes 1.
4. Reset: count becomes 0.
5. Decrement: count becomes -1.

I checked the displayed count after each important action.

## Conclusion

These tests helped me verify that the counter responds correctly to user interactions.
They also helped me understand how React Testing Library can be used to test React components.
