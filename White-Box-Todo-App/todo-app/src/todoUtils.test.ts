import { describe, expect, it } from "@jest/globals";
import type { Todo } from "./todoUtils";
import { addTodo, countDone, createTodo } from "./todoUtils";

// Suite 1: createTodo statement coverage
describe("createTodo statement coverage", () => {
    it("creates a todo with the correct text, id, and default status", () => {
        const todo = createTodo("Buy milk");

        expect(todo.text).toBe("Buy milk");
        expect(todo.done).toBe(false);
        expect(typeof todo.id).toBe("number");
    });
});

// Suite 2: addTodo Branch coverage
describe("addTodo branch coverage", () => {
    it("returns the original list when the text is blank", () => {
        const todos: Todo[] = [];
        const result = addTodo(todos, "   ");

        expect(result).toEqual([]);
        expect(result).toBe(todos);
    });

    it("adds a todo when the text is valid", () => {
        const todos: Todo[] = [];
        const result = addTodo(todos, "Buy milk");

        expect(result).toHaveLength(1);
        expect(result[0].text).toBe("Buy milk");
        expect(result[0].done).toBe(false);
        expect(typeof result[0].id).toBe("number");
    });

    it("removes extra spaces around valid text", () => {
        const todos: Todo[] = [];
        const result = addTodo(todos, "  Walk the dog  ");

        expect(result[0].text).toBe("Walk the dog");
    });
});

// Suite 3: countDone Loop coverage
describe("countDone loop coverage", () => {
    it("returns 0 when the list is empty", () => {
        const todos: Todo[] = [];

        expect(countDone(todos)).toBe(0);
    });

    it("counts one completed todo", () => {
        const todos: Todo[] = [
            { id: 1, text: "Buy milk", done: true }
        ];

        expect(countDone(todos)).toBe(1);
    });

    it("counts only completed todos in a list with several items", () => {
        const todos: Todo[] = [
            { id: 1, text: "Buy milk", done: true },
            { id: 2, text: "Walk the dog", done: false },
            { id: 3, text: "Write tests", done: true }
        ];

        expect(countDone(todos)).toBe(2);
    });
});