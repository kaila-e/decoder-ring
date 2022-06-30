const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

it("should return false if the given alphabet isn't exactly 26 characters long", () => {
  const input = "hi";
  const alphabet = "xoyqmcgrukswaflnthdjpzibe";
  const expected = false;
  const output = substitution(input, alphabet);
  expect(output).to.equal(expected);
});

it("should correctly translate the given phrase, based on the alphabet given to the function", () => {
  const input = "hi";
  const alphabet = "xoyqmcgrukswaflnthdjpzibev";
  const expected = "ru";
  const output = substitution(input, alphabet);
  expect(output).to.equal(expected);
});

it("should return false if there are any duplicate characters in the given alphabet", () => {
  const input = "xxyqmcgrukswaflnthdjpzibev";
  const expected = false;
  const output = substitution(input);
  expect(output).to.equal(expected);
});

it("should maintain spaces in the message, before and after encoding", () => {
  const input = "tea time";
  const alphabet = "xoyqmcgrukswaflnthdjpzibev";
  const expected = "jmx juam";
  const output = substitution(input, alphabet);
  expect(output).to.equal(expected);
});

it("should maintain spaces in the message, before and after decoding", () => {
  const input = "jmx juam";
  const alphabet = "xoyqmcgrukswaflnthdjpzibev";
  const expected = "tea time";
  const output = substitution(input, alphabet, false);
  expect(output).to.equal(expected);
});

it("should ignore capital letters", () => {
  const input = "Tea";
  const alphabet = "xoyqmcgrukswaflnthdjpzibev";
  const expected = "jmx";
  const output = substitution(input, alphabet);
  expect(output).to.equal(expected);
});
