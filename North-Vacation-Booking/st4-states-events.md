# Step 4: Identify Reservation States and Events

## Objective
The purpose of this step is to identify the possible states of a reservation and the events that can change those states.

## Five Reservation States

| ID | State | Description |
|---|---|---|
| S1 | Pending | A new reservation has been created and is waiting for payment. |
| S2 | Confirmed | Payment was successful and the reservation is confirmed. |
| S3 | Checked In | The guest has arrived and checked in. |
| S4 | Completed | The guest has checked out and the reservation is finished. |
| S5 | Cancelled | The reservation has been cancelled. |

## Five Events

| ID | Event | Description |
|---|---|---|
| E1 | Payment succeeds | The guest successfully completes payment. |
| E2 | Payment fails | The guest's payment is unsuccessful. |
| E3 | Guest cancels | The guest cancels the reservation. |
| E4 | Guest checks in | The guest arrives on the check-in date. |
| E5 | Guest checks out | The guest checks out after the reservation period. |

## Conclusion
Identifying states and events helps me understand how a reservation changes throughout its lifecycle.
Each event can cause the reservation to move to another state depending on the application requirements.