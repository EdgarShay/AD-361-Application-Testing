# Step 1: Error Guessing

## Feature Tested

Creating a Booking – North Vacation Booking application.

## Testing Approach

For error guessing, I used my experience with similar booking websites to think about problems
that users might experience. I focused on three possible errors that could happen when creating a booking.

## Possible Errors

| ID | Possible Error | Why I Think It Might Happen |
|---|---|---|
| EG01 | Invalid booking dates. | A user might select a checkout date earlier than the check-in date. |
| EG02 | Missing required information. | A user might try to submit the booking form without selecting a rental or entering the required information. |
| EG03 | Invalid number of guests. | A user might enter zero, a negative number, or more guests than the rental allows. |

## Expected Results

1. The application should prevent users from selecting invalid booking dates and display an error message.
2. The application should identify required information that is missing before allowing a booking.
3. The application should reject invalid guest numbers and enforce the rental's guest limit.

## Conclusion

I used error guessing to think about common mistakes that could happen during the booking process.
I focused on incorrect dates, missing information, and invalid guest numbers.
These are important because they could prevent users from completing a reservation.