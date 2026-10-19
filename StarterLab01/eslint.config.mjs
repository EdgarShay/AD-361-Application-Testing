import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
    {
        files: ["**/*.ts"],
        ignores: ["node_modules/**"],
        extends: [tseslint.configs.recommended],
    },
]);