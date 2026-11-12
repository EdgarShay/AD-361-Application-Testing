# Step 9: Compare Exploratory and White-Box Testing

## Exploratory Testing

For exploratory testing, I tried different combinations of buttons without looking at the source code.
One test idea I discovered was clicking Increment several times and then using Decrement to check if the count updated correctly.

## White-Box Testing

For white-box testing, I looked at the source code and discovered that I needed to test each statement that changes the count.
I also tested Reset after changing the count.

## How Viewing the Code Changed My Testing

Looking at the code helped me understand how the application works internally.
It also helped me create more specific test cases to cover each statement.

## Limitations

One limitation of exploratory testing is that I might miss some parts of the application because I am testing based on my observations.
One limitation of white-box testing is that even if the tests execute all the code, they might not find every possible problem.

## Conclusion

Both approaches are useful. Exploratory testing helps me discover unexpected behavior,
while white-box testing helps me understand the code and create more specific tests.
I think using both approaches gives better testing results.
