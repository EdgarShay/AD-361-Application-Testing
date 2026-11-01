# Step 5: Create a State Transition Table

## Objective
The purpose of this table is to identify how reservation states change when different events occur.
A valid transition follows the application requirements. An invalid transition attempts to change a reservation that cannot change states.

## State Transition Table

| Current State | Event | Expected State | Expected Result |
|---|---|---|---|
| Pending | Payment succeeds | Confirmed | The reservation is confirmed. |
| Pending | Payment fails | Cancelled | The reservation is cancelled and the dates are released. |
| Pending | Guest cancels | Cancelled | The reservation is cancelled. |
| Confirmed | Guest cancels | Cancelled | The reservation is cancelled and the dates are released. |
| Confirmed | Guest checks in on check-in date | Checked In | The guest is checked in. |
| Checked In | Guest checks out after checkout | Completed | The reservation is completed. |
| Cancelled | Guest attempts to check in | Cancelled | An InvalidStateError is raised. |
| Completed | Guest attempts to cancel | Completed | An InvalidStateError is raised. |
| Cancelled | Payment succeeds | Cancelled | An InvalidStateError is raised. |

## Valid Transitions
1. Pending → Confirmed
2. Pending → Cancelled (payment failure)
3. Pending → Cancelled (guest cancellation)
4. Confirmed → Cancelled
5. Confirmed → Checked In
6. Checked In → Completed

## Invalid Transitions
1. Cancelled → Checked In
2. Completed → Cancelled
3. Cancelled → Confirmed

These transitions are invalid because a cancelled or completed reservation cannot change states.

## Conclusion
The state transition table helps me identify which reservation state changes are allowed and which are not.
It also helps verify that the application raises an InvalidStateError when an invalid transition is attempted.