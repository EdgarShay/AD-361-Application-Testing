# Step 3: Decision Table Testing

## Feature Tested: NVIDIA Product Search

### Objective

The purpose of this test is to check how the NVIDIA website responds when a user submits a search.

Decision table testing helps identify different combinations of conditions and the expected actions for each combination.

## Conditions

- C1: Does the user enter a search term?
- C2: Does the user submit the search?
- C3: Are matching results available?

## Actions

- A1: Display matching search results.
- A2: Display a message requesting a search term.
- A3: Display a no-results message.
- A4: Do not perform a search.

## Completed Decision Table

| Conditions / Actions | Rule 1 | Rule 2 | Rule 3 | Rule 4 |
|---|---|---|---|---|
| C1: Search term entered? | Yes | Yes | No | Yes |
| C2: Search submitted? | Yes | Yes | Yes | No |
| C3: Matching results available? | Yes | No | N/A | N/A |
| A1: Display matching results | Yes | No | No | No |
| A2: Request a search term | No | No | Yes | No |
| A3: Display no-results message | No | Yes | No | No |
| A4: Do not perform search | No | No | No | Yes |

N/A means the condition does not apply to that rule.

## Test Cases Based on the Decision Table

| Test ID | Scenario | Expected Result |
|---|---|---|
| DT01 | User enters a valid search term, submits it, and matching results exist | Matching search results are displayed |
| DT02 | User enters a search term, submits it, but no matching results exist | A no-results message is displayed |
| DT03 | User submits an empty search | The website requests a search term |
| DT04 | User enters a search term but does not submit it | No search is performed |

## Conclusion

Decision table testing helped me understand how different conditions affect the website's response.
By combining conditions and expected actions, I created test cases for different search situations.