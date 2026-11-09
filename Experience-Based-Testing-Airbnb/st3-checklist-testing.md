# Step 3: Checklist-Based Testing

## Feature Tested

Creating a Booking – North Vacation Booking application.

## Testing Purpose

I created this checklist to test the main parts of the booking process.
The goal was to make sure the fields and buttons behaved as expected.

I used ideas from my error guesses and exploratory testing.

## Testing Checklist

| ID | Check | Result | Notes |
|---|---|---|---|
| CL01 | Open the booking page. | Passed | The page displayed the application title and navigation links. |
| CL02 | Select a rental. | Failed | The rental field appeared disabled, so I could not select a rental. |
| CL03 | Open the Date field. | Passed | The calendar appeared, and I could enter a date. |
| CL04 | Enter the number of guests. | Passed | I entered 5, 18, and 200 successfully. |
| CL05 | Check the maximum guest limit. | Unable to Test | The field accepted 200, but I could not verify the maximum allowed number. |
| CL06 | Submit the form without required information. | Failed | Nothing happened when I clicked Confirm Booking. |
| CL07 | Complete a booking. | Unable to Test | I could not complete the booking because the rental field appeared disabled and the confirmation button did not respond. |
| CL08 | Check the Bookings page for a new reservation. | Unable to Test | I could not verify this because no booking was successfully created. |

## Conclusion

The checklist helped me test the booking feature in an organized way.
The date and guest fields worked during basic testing, but the rental field and Confirm Booking button had problems.
I could not verify the maximum guest limit or successful booking creation. These issues need further investigation.