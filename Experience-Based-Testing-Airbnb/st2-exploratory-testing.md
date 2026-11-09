# Step 2: Exploratory Testing

## Feature Tested

Creating a Booking – North Vacation Booking application.

## Testing Charter

I want to investigate whether users can successfully enter their booking information
and start creating a reservation using the booking form.

## Testing Session

I explored the booking feature by interacting with the different fields and buttons.
I focused on understanding how the form worked and identifying possible problems.

## Exploratory Testing Notes

| What I Tried | What Happened | What I Decided to Try Next |
|---|---|---|
| Opened the application and went to the booking page. | The page displayed the North Vacation Booking title and navigation links. | I decided to check the rental field. |
| Clicked the Rental field. | The rental field appeared disabled, and I could not select a rental. | I decided to investigate the other fields. |
| Clicked the Date field. | A calendar appeared, and I could enter a date. | I decided to test the number of guests. |
| Entered 5 and 18 in the Number of Guests field. | The field accepted both numbers and displayed up and down buttons. | I decided to try a larger number. |
| Entered 200 in the Number of Guests field. | The field accepted 200. I could not verify the maximum allowed number. | I decided to try submitting the form. |
| Clicked Confirm Booking without entering information. | Nothing happened visibly after clicking the button. | I decided to record this as a possible problem with the form or its validation. |

## Problems Found

1. The rental field appeared disabled, so I could not select a rental.
2. The guest field accepted 200, but I could not verify whether there was a maximum guest limit.
3. The Confirm Booking button did not respond when I clicked it without entering information.
4. I could not complete a booking because the form was not working correctly.

## Ideas for Future Testing

- Try selecting a checkout date earlier than the check-in date.
- Test zero and negative guest numbers.
- Verify the maximum number of guests allowed.
- Investigate why the rental field is disabled.
- Test successful booking creation after the form is working.

## Conclusion

During my exploratory testing, I found some problems with the booking feature. The date and guest fields worked,
but the rental field appeared disabled. I also could not complete a booking because the Confirm Booking button did not respond.
This helped me identify areas that need more testing and improvement.