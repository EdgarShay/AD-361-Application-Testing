# Step 6: Create State Transition Test Cases

## Objective
The purpose of these test cases is to verify that North Vacation Booking handles valid and invalid reservation state changes correctly.

## State Transition Test Cases

### ST01: Successful Payment
- **Starting State:** Pending
- **Event:** Payment succeeds.
- **Expected State:** Confirmed
- **Expected Result:** The reservation is confirmed.
- **Transition Type:** Valid

### ST02: Failed Payment
- **Starting State:** Pending
- **Event:** Payment fails.
- **Expected State:** Cancelled
- **Expected Result:** The reservation is cancelled and the dates are released.
- **Transition Type:** Valid

### ST03: Guest Cancels Pending Reservation
- **Starting State:** Pending
- **Event:** Guest cancels.
- **Expected State:** Cancelled
- **Expected Result:** The reservation is cancelled.
- **Transition Type:** Valid

### ST04: Guest Cancels Confirmed Reservation
- **Starting State:** Confirmed
- **Event:** Guest cancels.
- **Expected State:** Cancelled
- **Expected Result:** The reservation is cancelled and the dates are released.
- **Transition Type:** Valid

### ST05: Guest Checks In
- **Starting State:** Confirmed
- **Event:** Guest checks in on the check-in date.
- **Expected State:** Checked In
- **Expected Result:** The guest is checked in successfully.
- **Transition Type:** Valid

### ST06: Guest Checks Out
- **Starting State:** Checked In
- **Event:** Guest checks out after checkout.
- **Expected State:** Completed
- **Expected Result:** The reservation is marked as completed.
- **Transition Type:** Valid

### ST07: Cancelled Reservation Attempts Check-In
- **Starting State:** Cancelled
- **Event:** Guest attempts to check in.
- **Expected State:** Cancelled
- **Expected Result:** An InvalidStateError is raised. The reservation remains cancelled.
- **Transition Type:** Invalid

### ST08: Completed Reservation Attempts Cancellation
- **Starting State:** Completed
- **Event:** Guest attempts to cancel.
- **Expected State:** Completed
- **Expected Result:** An InvalidStateError is raised. The reservation remains completed.
- **Transition Type:** Invalid

### ST09: Cancelled Reservation Attempts Payment Confirmation
- **Starting State:** Cancelled
- **Event:** Payment succeeds.
- **Expected State:** Cancelled
- **Expected Result:** An InvalidStateError is raised. The reservation remains cancelled.
- **Transition Type:** Invalid

### ST10: Complete Reservation Sequence
- **Starting State:** Pending
- **Events:**
  1. Payment succeeds.
  2. Guest checks in on the check-in date.
  3. Guest checks out after checkout.
- **Expected State:** Completed
- **Expected Result:** The reservation moves through Pending → Confirmed → Checked In → Completed successfully.
- **Transition Type:** Valid

### ST11: Reservation Cancellation Sequence
- **Starting State:** Pending
- **Events:**
  1. Guest cancels the reservation.
  2. Guest attempts to check in.
- **Expected State:** Cancelled
- **Expected Result:** The reservation is cancelled. The second action raises an InvalidStateError, and the reservation remains cancelled.
- **Transition Type:** Valid and Invalid

## Summary of Test Coverage
| Test Coverage | Number of Test Cases |
|---|---:|
| Valid individual transitions | 6 |
| Invalid individual transitions | 3 |
| Complete reservation sequence | 1 |
| Cancellation sequence | 1 |
| **Total** | **11** |

## Conclusion
State transition testing helped me understand how reservations move between different states.
I tested successful payments, failed payments, cancellations, check-ins, and checkouts.
I also included invalid transitions to verify that the application prevents cancelled or completed reservations from changing states.

