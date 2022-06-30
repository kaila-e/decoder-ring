// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function alphabetIsAllUniqueCharacters(alphabet) {
    return Array.from(new Set(alphabet)).length === 26;
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here

    //set defaults
    if (!input || !alphabet || alphabet.length !== 26) return false;
    if (!alphabetIsAllUniqueCharacters(alphabet)) return false;

    //set variables
    input = input.toLowerCase();
    var addSpaces = input.replace(/ /g, "&nbsp;");
    let abc = "abcdefghijklmnopqrstuvwxyz";
    let output = "";

    if (encode) {
      //for as many letters as there are
      for (let i = 0; i < input.length; i++) {
        //access the letter in the input (message)
        let character = input.charAt(i);
        //find its position in the alphabet
        let index = abc.indexOf(character);
        //if it's not a letter (-1 is not found),
        if (index == -1) {
          //then leave it as is & add
          output += character;
          //otherwise
        } else {
          //find the corresponding letter in the key & add
          output += alphabet.charAt(index);
        }
        // if (input[i]) {
        //   output += alphabet[i];
        // }
      }
      return output;
    }

    if (!encode) {
      // for as many letters as there are in the encoded message (starting with first letter)
      for (let i = 0; i < input.length; i++) {
        let character = input.charAt(i);
        // look at the next character in the encoded message

        // find its position in the key
        let index = alphabet.indexOf(character);
        // find the corresponding letter in the alphabet
        output += character === " " ? " " : abc.charAt(index);
        // output += abc.charAt(index); <<< originally had this
        // use that letter to decode the letter in the encoded message
      }
      return output;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
