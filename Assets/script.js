// Assignment Code
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];


function passwordOptions(){
  var length = parseInt(window.prompt("How many characters would you like it to be?"));
  if (Number.isNaN(length)){
    window.alert("Did not choose a number");
    return null;
  }
  if (length < 8 || length > 128){
    window.alert("The password length must be between 8 and 128 characters.");
    return null;
  } 
  var hasSpecial = window.confirm("Would you like to include special characters?");
  var hasNumbers = window.confirm("Would you like to include numerical characters?");
  var hasUpperCased = window.confirm("Would you like to include upper cased characters?");
  var hasLowerCased = window.confirm("Would you like to include lower cased characters?");
  if (hasSpecial === false && hasNumbers === false && hasUpperCased === false && hasLowerCased === false){
    window.alert("You must pick at least one character type");
    return null;
  }
  var options = { 
    length: length, 
    hasSpecial: hasSpecial,
    hasNumbers: hasNumbers,
    hasUpperCased: hasUpperCased,
    hasLowerCased: hasLowerCased
  }
  return options;
}

function generatePassword(){
  var options = passswordOptions ()
  var output = [] 
  var possibleCharacters = []
  var guaranteedCharacters = []
  function random(array){
    var index = Math.floor(Math.random()* array.length)
    var character = array[index]
  }
  if (options.hasSpecial){
    possibleCharacters = possibleCharacters.concat(specialCharacters)
    guaranteedCharacters.push(random(specialCharacters))
  }
  if (options.hasNumbers){
    possibleCharacters = possibleCharacters.concat(numericCharacters)
    guaranteedCharacters.push(random(numericCharacters))
  }
  if (options.hasUpperCased){
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters)
    guaranteedCharacters.push(random(upperCasedCharacters))
  }
  if (options.hasLowerCased){
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters)
    guaranteedCharacters.push(random(lowerCasedCharacters))
  }
};
// write two for loops
// lastly a result.join to wrap everthing up

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //?
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
