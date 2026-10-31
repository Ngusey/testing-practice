import { calculator } from "../src/calculator";

test("adds numbers", () => {
  expect(calculator.add(5, 3)).toBe(8);
});

test("subtracts numbers", () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test("multiplies numbers", () => {
  expect(calculator.multiply(5, 3)).toBe(15);
});

test("divides numbers", () => {
  expect(calculator.divide(6, 3)).toBe(2);
});