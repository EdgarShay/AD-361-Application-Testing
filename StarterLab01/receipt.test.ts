import { describe, expect, jest, test } from "@jest/globals";

import {
    addItem,
    deleteItem,
    printReceipt,
    tax,
    total,
} from "./fixed_receipt";

describe("Receipt functions", () => {
    test("Happy path: addItem adds a new item", () => {
        expect(() => addItem("milk", 4.5)).not.toThrow();
    });

    test("Unhappy path: addItem rejects a negative price", () => {
        expect(() => addItem("milk", -4.5)).toThrow();
    });

    test("Edge case: addItem accepts a zero price", () => {
        expect(() => addItem("free sample", 0)).not.toThrow();
    });

    test("deleteItem removes the matching item", () => {
        const result = deleteItem("sandwich");
        expect(result.some((item) => item.name === "sandwich")).toBe(false);
    });

    test("total returns a numeric subtotal", () => {
        expect(typeof total()).toBe("number");
    });

    test("tax calculates 8% of the subtotal", () => {
        const subtotal = total();
        expect(tax(0.08)).toBeCloseTo(subtotal * 0.08);
    });

    test("printReceipt prints receipt information", () => {
        const logSpy = jest.spyOn(console, "log").mockImplementation(() => { });

        printReceipt(0.08);

        expect(logSpy).toHaveBeenCalled();

        logSpy.mockRestore();
    });
});