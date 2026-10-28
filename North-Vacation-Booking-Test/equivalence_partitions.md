# Equivalence Partition Tables

## 1. Number of Nights

| Partition | Range or Condition | Expected Result |
|---|---|---|
| Invalid low | 0 nights or fewer | ValueError |
| Valid low | 1 night | Reservation accepted if other requirements pass |
| Valid middle | 2–30 nights | Reservation accepted if other requirements pass |
| Valid high | 31 nights | Reservation accepted if other requirements pass |
| Invalid high | More than 31 nights | ValueError |

## 2. Number of Guests

| Partition | Range or Condition | Expected Result |
|---|---|---|
| Invalid low | Fewer than 1 guest | ValueError |
| Valid, standard rate | 1–5 guests | No additional guest fee |
| Valid, additional fee | 6–12 guests | $25 per extra guest per night |
| Invalid high | More than 12 guests | ValueError |

## 3. Check-in and Checkout Dates

| Partition | Range or Condition | Expected Result |
|---|---|---|
| Valid dates | Check-in is before checkout, with 1–31 nights | Dates are valid |
| Invalid dates | Check-in equals checkout | ValueError |
| Invalid dates | Check-in is after checkout | ValueError |
| Invalid date range | More than 31 nights | ValueError |

## 4. Availability

| Partition | Range or Condition | Expected Result |
|---|---|---|
| Available | Every requested night is available | Reservation accepted |
| Unavailable | At least one requested night is unavailable | UnavailableError |

## Conclusion

Equivalence partitioning groups inputs that should produce the same type of result. This helps reduce the number of tests while still checking important valid and invalid conditions.
