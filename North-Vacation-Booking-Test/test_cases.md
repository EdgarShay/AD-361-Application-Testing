# North Vacation Booking Test Cases

## Number of Nights

### TC01 - Invalid Number of Nights
- **Classification:** Number of nights
- **Partition:** Invalid low
- **Input:** Check-in June 1, checkout June 1, 2 guests
- **Expected Result:** ValueError because the reservation is 0 nights.

### TC02 - Minimum Number of Nights
- **Classification:** Number of nights
- **Partition:** Valid low
- **Input:** Check-in June 1, checkout June 2, 2 guests
- **Expected Result:** Reservation is accepted for 1 night.

### TC03 - Maximum Number of Nights
- **Classification:** Number of nights
- **Partition:** Valid high
- **Input:** Check-in June 1, checkout July 2, 2 guests
- **Expected Result:** Reservation is accepted for 31 nights.

### TC04 - Too Many Nights
- **Classification:** Number of nights
- **Partition:** Invalid high
- **Input:** Check-in June 1, checkout July 3, 2 guests
- **Expected Result:** ValueError because the reservation is 32 nights.

## Number of Guests

### TC05 - Invalid Number of Guests
- **Classification:** Number of guests
- **Partition:** Invalid low
- **Input:** June 1–June 3, 0 guests
- **Expected Result:** ValueError.

### TC06 - Standard Guest Rate
- **Classification:** Number of guests
- **Partition:** Valid, standard rate
- **Input:** June 1–June 3, 3 guests
- **Expected Result:** Reservation is accepted. Total cost is $450.

### TC07 - Additional Guest Fee
- **Classification:** Number of guests
- **Partition:** Valid, additional fee
- **Input:** June 1–June 3, 6 guests
- **Expected Result:** Reservation is accepted. Total cost is $500.

### TC08 - Too Many Guests
- **Classification:** Number of guests
- **Partition:** Invalid high
- **Input:** June 1–June 3, 13 guests
- **Expected Result:** ValueError.

## Check-in and Checkout Dates

### TC09 - Same Check-in and Checkout Date
- **Classification:** Check-in and checkout dates
- **Partition:** Invalid dates
- **Input:** Check-in June 5, checkout June 5, 2 guests
- **Expected Result:** ValueError.

### TC10 - Check-in After Checkout
- **Classification:** Check-in and checkout dates
- **Partition:** Invalid dates
- **Input:** Check-in June 6, checkout June 5, 2 guests
- **Expected Result:** ValueError.

## Availability

### TC11 - Available Dates
- **Classification:** Availability
- **Partition:** Available
- **Input:** June 1–June 3, 2 guests; all nights are available.
- **Expected Result:** Reservation is accepted. Total cost is $450.

### TC12 - Unavailable Dates
- **Classification:** Availability
- **Partition:** Unavailable
- **Input:** June 1–June 3, 2 guests; June 2 is unavailable.
- **Expected Result:** UnavailableError because at least one requested night is unavailable.

## Conclusion

These test cases check valid and invalid reservations, guest limits, date conditions, and availability. They use representative inputs to test the expected behavior without examining the application's source code.
