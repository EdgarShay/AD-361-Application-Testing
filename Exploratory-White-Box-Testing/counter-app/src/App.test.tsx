import { describe, expect, test } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Counter Application", () => {

    // Test 1: Check the initial state
    test("displays the starting count and all buttons", () => {
        render(<App />);

        expect(screen.getByText("Count: 0")).toBeTruthy();
        expect(screen.getByRole("button", { name: "Increment" })).toBeTruthy();
        expect(screen.getByRole("button", { name: "Decrement" })).toBeTruthy();
        expect(screen.getByRole("button", { name: "Reset" })).toBeTruthy();
    });

    // Test 2: Increment
    test("increases the count from 0 to 1", () => {
        render(<App />);

        fireEvent.click(screen.getByRole("button", { name: "Increment" }));

        expect(screen.getByText("Count: 1")).toBeTruthy();
    });

    // Test 3: Decrement
    test("decreases the count from 0 to -1", () => {
        render(<App />);

        fireEvent.click(screen.getByRole("button", { name: "Decrement" }));

        expect(screen.getByText("Count: -1")).toBeTruthy();
    });

    // Test 4: Reset after changing the count
    test("resets the count back to 0", () => {
        render(<App />);

        fireEvent.click(screen.getByRole("button", { name: "Increment" }));
        fireEvent.click(screen.getByRole("button", { name: "Increment" }));

        expect(screen.getByText("Count: 2")).toBeTruthy();

        fireEvent.click(screen.getByRole("button", { name: "Reset" }));

        expect(screen.getByText("Count: 0")).toBeTruthy();
    });

    // Test 5: Multiple actions in sequence
    test("handles multiple actions in sequence", () => {
        render(<App />);

        const increment = screen.getByRole("button", { name: "Increment" });
        const decrement = screen.getByRole("button", { name: "Decrement" });
        const reset = screen.getByRole("button", { name: "Reset" });

        fireEvent.click(increment);
        expect(screen.getByText("Count: 1")).toBeTruthy();

        fireEvent.click(increment);
        expect(screen.getByText("Count: 2")).toBeTruthy();

        fireEvent.click(decrement);
        expect(screen.getByText("Count: 1")).toBeTruthy();

        fireEvent.click(reset);
        expect(screen.getByText("Count: 0")).toBeTruthy();

        fireEvent.click(decrement);
        expect(screen.getByText("Count: -1")).toBeTruthy();
    });

});