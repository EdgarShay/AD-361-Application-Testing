# Step 2: Create a Decision Table

## Objective
The purpose of this decision table is to test different combinations of reservation conditions and identify the expected actions.
I will use T for true, F for false, and - when a condition does not affect the result. X indicates that an action should occur.

## Decision Table
| Conditions and Actions | Rule 1 | Rule 2 | Rule 3 | Rule 4 | Rule 5 | Rule 6 |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| **Conditions** | | | | | | |
| Dates are valid | T | T | F | T | T | T |
| Number of nights is valid | T | T | - | F | T | T |
| Number of guests is valid | T | T | - | - | F | T |
| Requested nights are available | T | T | - | - | - | F |
| More than five guests | F | T | - | - | - | - |
| **Actions** | | | | | | |
| Create reservation | X | X | | | | |
| Calculate standard price | X | X | | | | |
| Add extra guest fee | | X | | | | |
| Raise ValueError | | | X | X | X | |
| Raise UnavailableError | | | | | | X |

## Explanation of Rules

- **Rule 1:** A valid reservation for five or fewer guests. Create the reservation and calculate the standard price.
- **Rule 2:** A valid reservation for more than five guests. Create the reservation, calculate the standard price,
and add the extra guest fee.
- **Rule 3:** The check-in and checkout dates are invalid. Raise a ValueError.
- **Rule 4:** The reservation exceeds the allowed number of nights. Raise a ValueError.
- **Rule 5:** The number of guests is outside the allowed range. Raise a ValueError.
- **Rule 6:** The requested dates are unavailable. Raise an UnavailableError.

## Conclusion
The decision table helps me organize different reservation situations and understand which actions the application should perform.
It also helps me create test cases for valid and invalid reservations.