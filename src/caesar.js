// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    let message = input.toLowerCase();
    const code = [];
    if (shift == 0 || shift > 25 || shift < -25){
      return false;
    }
    for (let i = 0; i < input.length; i++){
      let charValue = message.charCodeAt(i);
      if (charValue > 96 && charValue < 123){
        encode? charValue = charValue + shift : charValue = charValue - shift;
        if (charValue > 122){
          let remainder = charValue - 123;
          charValue = 97 + remainder;
        }
        if (charValue < 97){
          let remainder = charValue - 97;
          charValue = 123 + remainder;
        }
        code.push(String.fromCharCode(charValue));
      }
      else {code.push(String.fromCharCode(charValue))};

    }
    return code.join("");
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
