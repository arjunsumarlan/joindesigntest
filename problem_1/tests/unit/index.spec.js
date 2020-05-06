const solve = require('../../logics');
const {
    EMPTY_STRING,
    EMPTY_OUTPUT,
    MAX_LENGTH_STRING,
    MAX_LENGTH_OUTPUT,
    LONG_STRING,
    LONG_OUTPUT,
    SAMPLE_A,
    SAMPLE_A_OUTPUT,
    SAMPLE_B,
    SAMPLE_B_OUTPUT,
    SAMPLE_C,
    SAMPLE_C_OUTPUT
} = require('../../constants')

describe("test solver of problem 1", () => {
    it("test empty string", async () => {
        const emptyString = solve(EMPTY_STRING);
        expect(emptyString).toBe(EMPTY_OUTPUT);
    });

    it("test 100 length of string", async () => {
        const maxString = solve(MAX_LENGTH_STRING);
        expect(maxString).toBe(MAX_LENGTH_OUTPUT);
    });

    it("test more than 100 length of string", async () => {
        const maxString = solve(LONG_STRING);
        expect(maxString).toBe(LONG_OUTPUT);
    });

    it("test input for aaabccddd", async () => {
        const maxString = solve(SAMPLE_A);
        expect(maxString).toBe(SAMPLE_A_OUTPUT);
    });

    it("test input for aa that will yield Empty String", async () => {
        const maxString = solve(SAMPLE_B);
        expect(maxString).toBe(SAMPLE_B_OUTPUT);
    });

    it("test input for baab that will yield Empty String", async () => {
        const maxString = solve(SAMPLE_C);
        expect(maxString).toBe(SAMPLE_C_OUTPUT);
    });
});