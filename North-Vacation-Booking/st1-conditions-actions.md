# Step 1: Identify Conditions and Actions

## Application
**Name:** North Vacation Booking

**Purpose:** An application that allows users to list their homes as vacation rentals and allows guests to make reservations.

## Five Conditions
The following conditions determine whether a reservation can be accepted.

| ID | Condition | Description |
|---|---|---|
| C1 | Dates are valid | Check-in must be before checkout. |
| C2 | Number of nights is valid | The reservation must be between 1 and 31 nights. |
| C3 | Number of guests is valid | The reservation must include between 1 and 12 guests. |
| C4 | Requested nights are available | Every night in the requested date range must be available. |
| C5 | More than five guests | Determines whether an additional guest fee is required. |

## Five Actions
The following actions may occur depending on the reservation conditions.

| ID | Action | Description |
|---|---|---|
| A1 | Create reservation | Create a new reservation when all requirements are met. |
| A2 | Calculate standard price | Calculate $200 per night plus the $50 cleaning fee. |
| A3 | Add extra guest fee | Add $25 per night for each guest over five. |
| A4 | Raise ValueError | Raise an error when reservation information is invalid. |
| A5 | Raise UnavailableError | Raise an error when requested nights are unavailable. |

## Conclusion
Identifying conditions and actions helps me understand what the application needs to check before accepting a reservation.
It also helps determine what should happen when the reservation is valid, invalid, or unavailable.