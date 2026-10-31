import { capitalize } from "../src/capitalize";

test("capitalizes the first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});