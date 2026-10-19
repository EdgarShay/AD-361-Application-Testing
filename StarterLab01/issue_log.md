# Issue Log — Receipt Program

## Issue 1: Empty Array Entry
- **Location:** Line 12
- **Issue:** There is an extra comma that creates an empty array entry.
- **Explanation:** The array may contain an undefined entry, which can cause problems when accessing item properties or calculating the subtotal.
- **Suggested Fix:** Remove the extra comma and ensure every array entry contains a valid item object.
- **Status:** Open

## Issue 2: Invalid Item Object Syntax
- **Location:** Line 16, addItem() function, newItem declaration
- **Issue:** The object uses = instead of : to assign values to its properties.
- **Explanation:** This is a syntax error, so the TypeScript file cannot compile correctly.
- **Suggested** Fix: Use name: name and price: price in the object.
const newItem = { name: name, price: price };
- **Status:** Open

## Issue 3: Incorrect Item Lookup
- **Location:** Line 21, deleteItem() function, ITEMS.indexOf("name")
- **Issue:** The function searches for the string "name" instead of finding an item with the matching name.
- **Explanation:** It will not correctly identify the item the user wants to delete.
- **Suggested Fix:** Use a method such as findIndex() to search for an item whose name matches the parameter.
ITEMS.findIndex(item => item.name === name);
- **Status:** Open

## Issue 4: Incorrect Item Removal
- **Location:** Line 22, deleteItem() function, ITEMS.pop()
- **Issue:** pop() The function removes the last item instead of the item that matches the requested name.
- **Explanation:** This could remove the wrong product from the receipt.
- **Suggested Fix:** Remove the item at the index found by the search,
and handle the case where no matching item exists.
- **Status:** Open

## Issue 5: Incorrect Loop in total()
- **Location:** Line 27, total() function, for (const i of 3)
- **Issue:** The loop attempts to iterate over the number 3, which is not iterable.
- **Explanation:** The function cannot correctly loop through the item list to calculate the subtotal.
- **Suggested Fix:** Iterate through the ITEMS array and add each item's price.
for (const item of ITEMS)
- **Status:** Open

## Issue 6: Total Variable Is Not Declared
- **Location:** Line 28, total() function, total = total + ITEMS[i]["price"]
- **Issue:** The variable total is used without being declared or initialized.
- **Explanation:** This can cause a compilation or runtime error, depending on the environment.
- **Suggested** Fix: Declare a local variable, such as let subtotal = 0, before adding item prices.
total += item.price;
- **Status:** Open

## Issue 7: Incorrect Tax Calculation
- **Location:** Line 34, tax() function
- **Issue:** Tax is calculated by adding the tax rate directly to the subtotal.
- **Explanation:** Tax should be a percentage of the subtotal, not a simple addition.
- **Suggested Fix:** If taxRate represents a decimal percentage, calculate the tax amount as total() * taxRate.
const tax = total() * taxRate;
- **Status:** Open

## Issue 8: Incorrect Item Loop in printReceipt()
- **Location:** Line 42, printReceipt() function, for (const i of ITEMS)
- **Issue:** The loop variable i contains an item object, but the code uses it as an array index.
- **Explanation:** The item details will not be accessed correctly.
- **Suggested Fix:** Use the item object directly inside the loop.
console.log(`${item.name}: $${item.price}`);
- **Status:** Open

## Issue 9: Incorrect Receipt String Formatting
- **Location:** Line 37 (printReceipt function)
- **Issue:** Extra closing brace } in the output string.
- **Explanation:** The string contains incorrect syntax.
- **Suggested Fix:** Remove the extra brace.
- **Status:** Open

# Issue 10: Incorrect Subtotal Output
- **Location:** Line 46, printReceipt() function, subtotal console.log()
- **Issue:** The code converts the total function itself to a string instead of calling the function.
- **Explanation:** The receipt will not display the calculated subtotal.
- **Suggested Fix:** Call total() and format the returned number.
- **Status:** Open

## Issue 11: Invalid Tax Output String
- **Location:** Line 48, printReceipt() function, tax console.log()
- **Issue:** The string has mismatched quotation marks and does not display the calculated tax correctly.
- **Explanation:** This causes a syntax error and prevents the file from compiling.
- **Suggested Fix:** Use valid template literal syntax and display the result returned by the tax calculation.
console.log(`Tax: $${String(taxRate)}`);
- **Status:** Open

## Issue 12: Incorrect Final Total Output
- **Location:** printReceipt() function, final console.log()
- **Issue:** The code passes String(taxRate) to tax() instead of passing a number.
- **Explanation:** The tax function expects a number, but the code passes a string.
The output also does not clearly calculate the subtotal plus tax.
- **Suggested Fix:** Pass the numeric taxRate and calculate the final total according to the program requirements.
tax(taxRate)
- **Status:** Open



## Root Cause
- The code was written without checking that the functions correctly use the array and its item properties. This contributed to incorrect item lookup and removal.

## Error
- A developer mistakenly used = instead of : when creating the newItem object in addItem().

## Defect
- The deleteItem() function uses ITEMS.pop(), which removes the last item instead of the requested item.

## Failure
- When the program attempts to run total(), the loop tries to iterate over the number 3, which can cause a runtime error.

## Review Note
- These findings were identified by manually inspecting the original source code. The original file has not been changed. ESLint findings will be added after automated static analysis is run.