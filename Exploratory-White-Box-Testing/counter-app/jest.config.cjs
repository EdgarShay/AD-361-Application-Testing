module.exports = {
    preset: "ts-jest",

    testEnvironment: "jsdom",

    testMatch: ["<rootDir>/src/**/*.test.tsx"],

    transform: {
        "^.+\\.tsx?$": [
            "ts-jest",
            {
                tsconfig: "tsconfig.test.json"
            }
        ]
    },

    collectCoverageFrom: [
        "src/App.tsx"
    ],

    coverageDirectory: "coverage",

    coverageReporters: ["text", "html"]
};