// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  let matchObj = [
    {letter: "a", index:0}, {letter: "b", index:1}, {letter: "c", index:2},
    {letter: "d", index:3}, {letter: "e", index:4}, {letter: "f", index:5},
    {letter: "g", index:6}, {letter: "h", index:7}, {letter: "i", index:8},
    {letter: "j", index:9}, {letter: "k", index:10}, {letter: "l", index:11},
    {letter: "m", index:12}, {letter: "n", index:13}, {letter: "o", index:14},
    {letter: "p", index:15}, {letter: "q", index:16}, {letter: "r", index:17},
    {letter: "s", index:18}, {letter: "t", index:19}, {letter: "u", index:20},
    {letter: "v", index:21}, {letter: "w", index:22}, {letter: "x", index:23},
    {letter: "y", index:24}, {letter: "z", index:25}, {letter: " ", index:-1},
  ];

  function substitution(input, alphabet, encode = true) {
   let outputArray = [];
   if (!alphabet || alphabet.length !== 26) {return false};
   if ((new Set(alphabet)).size !== alphabet.length) {return false};
   if (encode === true){
   for (let i = 0; i < input.length; i++){
   matchObj.find((char) =>{
     if (char.letter === input[i].toLowerCase()){
       if (char.index === -1){
         outputArray.push(" ");
       }
       else
       {outputArray.push(alphabet[char.index])};
     }
   });
  }
}
  if (encode === false){
    for (let i = 0; i < input.length; i++){
      let inputIndex = alphabet.indexOf(input[i]);
      matchObj.find((char) =>{
        if (char.index === inputIndex){
          outputArray.push(char.letter);
        }
      });
    }
  }
  return outputArray.join('');
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
