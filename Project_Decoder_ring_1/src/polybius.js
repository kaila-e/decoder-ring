// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  //helper function
  function transformToNumber(input) {
    if (input === "a") return "11";
    if (input === "b") return "21";
    if (input === "c") return "31";
    if (input === "d") return "41";
    if (input === "e") return "51";
    if (input === "f") return "12";
    if (input === "g") return "22";
    if (input === "h") return "32";
    if (input === "i") return "42";
    if (input === "j") return "42";
    if (input === "k") return "52";
    if (input === "l") return "13";
    if (input === "m") return "23";
    if (input === "n") return "33";
    if (input === "o") return "43";
    if (input === "p") return "53";
    if (input === "q") return "14";
    if (input === "r") return "24";
    if (input === "s") return "34";
    if (input === "t") return "44";
    if (input === "u") return "54";
    if (input === "v") return "15";
    if (input === "w") return "25";
    if (input === "x") return "35";
    if (input === "y") return "45";
    if (input === "z") return "55";
    if (input === [" "]) return " ";
  }

  // create flipped helper function
  function transformToLetter(input) {
    if (input === "11") return "a";
    if (input === "21") return "b";
    if (input === "31") return "c";
    if (input === "41") return "d";
    if (input === "51") return "e";
    if (input === "12") return "f";
    if (input === "22") return "g";
    if (input === "32") return "h";
    if (input === "42") return "(i/j)";
    if (input === "52") return "k";
    if (input === "13") return "l";
    if (input === "23") return "m";
    if (input === "33") return "n";
    if (input === "43") return "o";
    if (input === "53") return "p";
    if (input === "14") return "q";
    if (input === "24") return "r";
    if (input === "34") return "s";
    if (input === "44") return "t";
    if (input === "54") return "u";
    if (input === "15") return "v";
    if (input === "25") return "w";
    if (input === "35") return "x";
    if (input === "45") return "y";
    if (input === "55") return "z";
    if (input === [" "]) return " ";
  }

  function isALetter(input) {
    if (input.toUpperCase() !== input.toLowerCase()) return true;
    else return false;
  }

  function isANumber(c) {
    return /\d/.test(c);
  }

  function isValid(input) {
    let totalOfNumbers = 0;
    for (let i = 0; i < input.length; i++) {
      if (isANumber(input[i])) {
        totalOfNumbers += 1;
      }
    }
    return totalOfNumbers % 2 == 0;
  }

  function polybius(input, encode = true) {
    // your solution code here

    if (input === "42") return "(i/j)";
    if (!isValid(input)) return false;

    const newString = input.toLowerCase();

    let output = "";
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        if (isALetter(newString[i])) {
          output += transformToNumber(newString[i]);
        } else {
          output += newString[i];
        }
      }
    } else {
      for (let i = 0; i < input.length; i += 2) {
        // console.log("current index: " + i);
        if (newString[i] === " ") {
          // if (!isANumber(newString[i])) {
          output += newString[i];
          i -= 1;
          continue;
        }
        output += transformToLetter(newString[i] + newString[i + 1]);
      }
    }
    return output;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
