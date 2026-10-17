import { expect, test } from "@jest/globals";

import {
    countVowels,
    isEven,
    palindrome
} from "../src/functions";

test("isEven num even", () => {
    expect(isEven(10)).toBe(true);
});

test("isEven num odd", () => {
    expect(isEven(11)).toBe(false);
});

test("palindrome is palindrome", () => {
    expect(palindrome("tacocat")).toBe(true);
});

test("palindrome is not palindrome", () => {
    expect(palindrome("cat")).toBe(false);
});

// Test for countVowels function
// Break one of your tests intentionally

test("countVowels has vowels", () => {
    expect(countVowels("hello world")).toBe(300);
});

test("countVowels has no vowels", () => {
    expect(countVowels("myths")).toBe(0);
});