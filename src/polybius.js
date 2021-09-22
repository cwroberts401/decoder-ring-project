// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  let matchObj = [
    {letter: "a", value:11}, {letter: "b", value:21}, {letter: "c", value:31},
    {letter: "d", value:41}, {letter: "e", value:51}, {letter: "f", value:12},
    {letter: "g", value:22}, {letter: "h", value:32}, {letter: "i", value:42},
    {letter: "j", value:42}, {letter: "k", value:52}, {letter: "l", value:13},
    {letter: "m", value:23}, {letter: "n", value:33}, {letter: "o", value:43},
    {letter: "p", value:53}, {letter: "q", value:14}, {letter: "r", value:24},
    {letter: "s", value:34}, {letter: "t", value:44}, {letter: "u", value:54},
    {letter: "v", value:15}, {letter: "w", value:25}, {letter: "x", value:35},
    {letter: "y", value:45}, {letter: "z", value:55}, {letter: " ", value:" "},
  ];

  function polybius(input, encode = true) {
    let secretCode = [];
    const noSpace = input.replace(" ","");
    if (encode === false && noSpace.length % 2 !== 0) {
      return false;
    }

    if (encode === false){
      for (let i = 0; i < input.length; i+=2){
        let code = matchObj.find((element) => {
          if (input[i] === " "){
            secretCode.push(" ");
            i = i-1;
          }
          if (element.value == input[i]+input[i+1]){
            secretCode.push(element.letter);
          }
        });
      }
    }


    if (encode === true){
    for (let i = 0; i < input.length; i++){
      let code = matchObj.find((element, j) => {
        if (element.letter === input[i].toLowerCase()){
        secretCode.push(element.value)}
      });
    }
    }
    return secretCode.join('');
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
