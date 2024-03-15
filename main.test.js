import { test, expect } from "vitest";
import { calculateCMR } from "./main.js";

test("Pre-Plague CMR", () => {
// Arrange
const expected = 72.85714285714286 ;
// Act
const actual = calculateCMR(102, 350, 4)
// Assert
expect(actual).toBe(expected);
});

test("During Plague CMR", () => {
// Arrange
  const expected = 394.2857142857143;
// Act
  const actual = calculateCMR(276, 350, 2);
// Assert
  expect(actual).toBe(expected);
});