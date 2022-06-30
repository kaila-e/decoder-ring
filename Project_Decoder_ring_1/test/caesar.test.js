const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

it("should return false if shift value isn't present", () => {
  const input = "thinkful";
  const expected = false;
  const output = caesar(input);
  expect(output).to.equal(expected);
});

it("should return false if shift is equal to 0", () => {
  const input = "thinkful";
  const shift = 0;
  const expected = false;
  const output = caesar(input, shift);
  expect(output).to.equal(expected);
});

it("should return false if shift is less than -25", () => {
  const input = "thinkful";
  const shift = -26;
  const expected = false;
  const output = caesar(input, shift);
  expect(output).to.equal(expected);
});

it("should return false if shift is greater than 25", () => {
  const input = "thinkful";
  const shift = 26;
  const expected = false;
  const output = caesar(input, shift);
  expect(output).to.equal(expected);
});

it("should maintain spaces throughout", () => {
  const input = "keep spaces";
  const shift = 1;
  const expected = "lffq tqbdft";
  const output = caesar(input, shift);
  expect(output).to.equal(expected);
});

it("should maintain other nonalphabetic symbols throughout", () => {
  const input = "keep#spaces";
  const shift = 1;
  const expected = "lffq#tqbdft";
  const output = caesar(input, shift);
  expect(output).to.equal(expected);
});

it("should ignore capital letters", () => {
  const input = "Keep#Spaces";
  const shift = 1;
  const expected = "lffq#tqbdft";
  const output = caesar(input, shift);
  expect(output).to.equal(expected);
});

it("should wrap around to the front of the alphabet if a letter is shifted so it goes 'off' the alphabet", () => {
  const input = "Keep#Spacez";
  const shift = 1;
  const expected = "lffq#tqbdfa";
  const output = caesar(input, shift);
  expect(output).to.equal(expected);
});
