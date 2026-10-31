import { caesarCipher } from "../src/caesarCipher";

test("shifts letters", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("preserves uppercase letters", () => {
  expect(caesarCipher("ABC", 1)).toBe("BCD");
});

test("wraps from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("preserves punctuation and spaces", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});