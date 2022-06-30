// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function isALetter(input) {
    if (input.toUpperCase() !== input.toLowerCase()) return true;
    else return false;
  }

  function caesar(input, shift, encode = true) {
    // check for 25, -25 first, check simple first
    // "if shift (1st part) ~ checks for truthy"
    if (!shift || shift < -25 || shift > 25 || shift === 0) return false;
    if (!encode) {
      shift = -shift;
    }

    const newString = input.toLowerCase();
    let a = "a";
    let z = "z";

    // const thinkful = "thinkful";

    const lowerBound = a.charCodeAt(0);
    const upperBound = z.charCodeAt(0);

    //shift = 3;

    let output = "";
    for (let i = 0; i < input.length; i++) {
      // 29-35, wrap in an if statement to check if it's a letter
      if (isALetter(newString[i])) {
        const charCode = newString.charCodeAt(i);
        let newCharCode = charCode + shift;
        if (newCharCode > upperBound) {
          const overA = newCharCode - upperBound;
          newCharCode = lowerBound + overA - 1;
        }
        if (newCharCode < lowerBound) {
          const underA = lowerBound - newCharCode;
          newCharCode = upperBound - underA + 1;
        }
        output += String.fromCharCode(newCharCode);
      } else {
        output += newString[i];
      }
    }
    return output;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
