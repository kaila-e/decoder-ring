const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

it("should translate the letter 'i' to '42' when encoding", () => {
  const input = "i";
  const expected = "42";
  const output = polybius(input);
  expect(output).to.equal(expected);
});

it("should translate the letter 'j' to '42' when encoding", () => {
  const input = "j";
  const expected = "42";
  const output = polybius(input);
  expect(output).to.equal(expected);
});

it("should translate '42' to '(i/j)' when decoding", () => {
  const input = "42";
  const expected = "(i/j)";
  const output = polybius(input);
  expect(output).to.equal(expected);
});

it("should ignore capital letters", () => {
  const input = "Tea";
  const expected = "445111";
  const output = polybius(input);
  expect(output).to.equal(expected);
});

it("should maintain spaces in the message, before and after encoding", () => {
  const input = "tea time";
  const expected = "445111 44422351";
  const output = polybius(input);
  expect(output).to.equal(expected);
});

it("should maintain spaces in the message, before and after decoding", () => {
  const input = "445111 44422351";
  const expected = "tea t(i/j)me";
  const output = polybius(input, false);
  expect(output).to.equal(expected);
});
