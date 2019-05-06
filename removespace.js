
/*
Complete the function given below that takes any string as input and removes all the vowels 
and spaces from it and returns the remaining string. 
Sample input - removeVowelsAndSpaces('arijit kumar')
output - 'rjtkmr'

*/

let removeVowelsAndSpaces = function(givenString){
   let vowels = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true,
    ' ': true,
  };

  let result = "";

  for (let i = 0; i < givenString.length; i++) {
    let letter = givenString[i].toLowerCase();
    if (!vowels[letter]) {
      result += givenString[i];
    }
  }
  return result;

};

module.exports = { removeVowelsAndSpaces: removeVowelsAndSpaces