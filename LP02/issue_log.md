# Issue Log

## Issue 1
- **Location:** Line 8,
- **Issue:** BALANCE is declared as an array ([15, 983]) but is used as a numeric value in calculations.
- **Explanation:** The deposit and withdrawal functions perform arithmetic operations on BALANCE, which requires a number rather than an array.
- **Suggested Fix:** Change BALANCE to a numeric value, such as:

let BALANCE = 15983;
- **Status:** Ongoing

## Issue 2
- **Location:** Line 12 (deposit function)
- **Issue:** The expression BALANCE + balance attempts to add an array and a number.
- **Explanation:** Since BALANCE is an array, the calculation does not work as intended.
- **Suggested Fix:** Store the balance as a number before performing calculations.
- **Status:** Ongoing

## Issue 3
- **Location:** Line 23
- **Issue:** Function name is misspelled as withdrawl.
- **Explanation:** The correct spelling is withdrawal or withdraw.
- **Suggested Fix:** export function withdraw(...)
- **Status:** Ongoing

## Issue 4
- **Location:** Line 25 (withdrawl function)
- **Issue:** Variable balance is used without being declared.
- **Explanation:** TypeScript will generate an error because no variable named balance exists in the function's scope.
- **Suggested Fix:** Add balance as a parameter or declare it before use.
- **Status:** Ongoing

## Issue 5
- **Location:** Line 23 (withdrawl function)
- **Issue:** Withdrawal adds money instead of subtracting it.
- **Explanation:** A withdrawal should reduce the account balance, not increase it.
- **Suggested Fix:** balance = balance - amount;
- **Status:** Ongoing

## Issue 6
- **Location:** Line 23-31 (withdrawl function)
- **Issue:** No validation prevents the balance from becoming negative.
- **Explanation:** One of the program requirements states that a user's balance should never become negative.
- **Suggested Fix:**
if (amount > balance) {
console.log("Insufficient funds");
return;
}
- **Status:** Ongoing

## Issue 7
- **Location:** Line 34 (balanceCheck function)
- **Issue:** console.log() appears after the return statement.
- **Explanation:** Any code after return is unreachable and never executes.
- **Suggested Fix:**
console.log(`Your balance is ${BALANCE}`);
return BALANCE;
- **Status:** Ongoing

## Issue 8
- **Location:** Line 40 (transfer function)
- **Issue:** withdrawl() is called with only one argument.
- **Explanation:** The function requires both pin and amount, but only amount is provided.
- **Suggested Fix:**
withdrawl(pin, amount);
- **Status:** Ongoing

## Issue 9
- **Location:** Line 40 (transfer function)
- **Issue:** The variable transferAmount is assigned a value but never used.
- **Explanation:** Unused variables make the code harder to maintain and may trigger linting warnings.
- **Suggested Fix:** Use the variable or remove it.
- **Status:** Ongoing

## Issue 10
_ **Location:** Line 42
- **Issue:** Parameter name reciver is misspelled.
- **Explanation:** Incorrect spelling reduces readability and professionalism.
- **Suggested Fix:** receiver
- **Status:** Ongoing

## Issue 11
- **Location:** Line 43 (transfer function)
- **Issue:** The function returns balanceCheck instead of calling it.
- **Explanation:** This returns a function reference rather than the account balance.
-**Suggested Fix:** return balanceCheck();
- **Status:** Ongoing

