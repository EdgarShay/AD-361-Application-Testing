# Step 3: Create Decision Table Test Cases
## Objective
The purpose of these test cases is to verify that North Vacation Booking responds correctly to each rule in the decision table.

## TC01: Valid Reservation With Five or Fewer Guests

- **Rule:** Rule 1
- **Check-in:** October 1, 2026
- **Checkout:** October 4, 2026
- **Number of nights:** 3
- **Number of guests:** 3
- **Availability:** Every requested night is available.
- **Conditions:** All reservation information is valid, and there are five or fewer guests.
- **Expected Action:** Create the reservation and calculate the standard price.
- **Expected Price:** $650
  - 3 nights × $200 = $600
  - Cleaning fee = $50
  - Total = $650
- **Expected Exception:** None.

## TC02: Valid Reservation With More Than Five Guests

- **Rule:** Rule 2
- **Check-in:** October 1, 2026
- **Checkout:** October 4, 2026
- **Number of nights:** 3
- **Number of guests:** 6
- **Availability:** Every requested night is available.
- **Conditions:** All reservation information is valid, and there are more than five guests.
- **Expected Action:** Create the reservation, calculate the standard price, and add the extra guest fee.
- **Expected Price:** $725
  - 3 nights × $200 = $600
  - Cleaning fee = $50
  - 1 extra guest × $25 × 3 nights = $75
  - Total = $725
- **Expected Exception:** None.

## TC03: Invalid Check-in and Checkout Dates

- **Rule:** Rule 3
- **Check-in:** October 4, 2026
- **Checkout:** October 1, 2026
- **Number of nights:** Invalid date order.
- **Number of guests:** 3
- **Availability:** Not evaluated.
- **Conditions:** Check-in is after checkout.
- **Expected Action:** Reject the reservation.
- **Expected Price:** No price calculated.
- **Expected Exception:** ValueError.

## TC04: Reservation Exceeds 31 Nights

- **Rule:** Rule 4
- **Check-in:** October 1, 2026
- **Checkout:** November 3, 2026
- **Number of nights:** 33
- **Number of guests:** 3
- **Availability:** Not evaluated.
- **Conditions:** The reservation exceeds the maximum of 31 nights.
- **Expected Action:** Reject the reservation.
- **Expected Price:** No price calculated.
- **Expected Exception:** ValueError.

## TC05: Invalid Number of Guests

- **Rule:** Rule 5
- **Check-in:** October 1, 2026
- **Checkout:** October 4, 2026
- **Number of nights:** 3
- **Number of guests:** 13
- **Availability:** Not evaluated.
- **Conditions:** The number of guests exceeds the maximum of 12.
- **Expected Action:** Reject the reservation.
- **Expected Price:** No price calculated.
- **Expected Exception:** ValueError.

## TC06: Requested Nights Are Unavailable

- **Rule:** Rule 6
- **Check-in:** October 1, 2026
- **Checkout:** October 4, 2026
- **Number of nights:** 3
- **Number of guests:** 3
- **Availability:** At least one requested night is unavailable.
- **Conditions:** Reservation information is valid, but not every requested night is available.
- **Expected Action:** Do not create the reservation.
- **Expected Price:** No reservation price charged.
- **Expected Exception:** UnavailableError.

## Conclusion
These six test cases cover all six rules in my decision table. They help verify that the application accepts valid reservations,
calculates prices correctly, and raises the correct exceptions for invalid or unavailable reservations.