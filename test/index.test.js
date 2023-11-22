const { validSpacing } = require("../src/index");

test("check if function has parameter", () => {
  expect(validSpacing()).toBe(false);
});

test("check if the parameter is a empty string return false", () => {
  expect(validSpacing(' ')).toBe(false);
});

test("check whether the string has no space in the beginning or in the end", () => {
  expect(validSpacing('Hello world  ')).toBe(false);
});

test("check if the sting has extra spaces", () => {
  expect(validSpacing('Hello  world')).toBe(false);
});

test("check if the string is valid", () => {
  expect(validSpacing('')).toBe(true);
});