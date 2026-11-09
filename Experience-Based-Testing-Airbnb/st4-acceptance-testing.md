# Step 4: Acceptance Testing

## Feature Tested

Creating a Booking – North Vacation Booking application.

## User Story

As a user, I want to select a rental, enter my booking dates and number of guests,
and confirm my booking so that I can reserve a place to stay.

## Acceptance Criteria

### AC01 – Select a Rental

**Given** I am on the booking page,

**When** I try to select an available rental,

**Then** I should be able to choose a rental from the available options.

**Actual Result:** The rental field appeared disabled, and I could not select a rental.

**Status:** Failed.

### AC02 – Enter Booking Dates

**Given** I am creating a booking,

**When** I click the Date field,

**Then** a calendar should appear so I can enter a booking date.

**Actual Result:** The calendar appeared, and I could enter a date.

**Status:** Passed for basic date entry.

### AC03 – Enter Number of Guests

**Given** I am creating a booking,

**When** I enter the number of guests,

**Then** the application should accept a valid number and reject invalid numbers.

**Actual Result:** I could enter 5, 18, and 200. I did not verify the minimum or maximum allowed values.

**Status:** Unable to Test full validation. Basic number entry worked.

### AC04 – Validate Required Information

**Given** I have not completed all the required booking fields,

**When** I click Confirm Booking,

**Then** the application should display a message explaining what information is missing.

**Actual Result:** Nothing happened when I clicked Confirm Booking without entering information.

**Status:** Failed.

### AC05 – Confirm and Save a Booking

**Given** I have entered valid booking information,

**When** I click Confirm Booking,

**Then** the application should save the booking and display a confirmation.

**Actual Result:** I could not complete this test because the rental field appeared disabled
and the confirmation button did not respond.

**Status:** Unable to Test.

## Acceptance Testing Summary

The booking feature did not meet all the acceptance criteria. The date field allowed basic date entry,
and the guest field accepted numbers. However, rental selection and booking confirmation did not work as expected.

## Conclusion

From the user's perspective, the booking process is not ready to use because I could not select a rental or complete a booking.
The application needs improvements to rental selection, input validation,
and booking confirmation before users can successfully make reservations.