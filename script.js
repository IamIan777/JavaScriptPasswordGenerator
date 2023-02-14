var generateBtn = document.querySelector("#generate");

function generatePassword() { 

  var  passwordLength = prompt(
    "Choose password length by choosing a number between 8 and 128"
  );
  if(passwordLength > 8 && passwordLength < 128 ) {
    
  } else {
    alert("The designated numebr must be between 8 and 128. Choose a different number to try again");
  }

var characterTypes =  [];

var lowercase = confirm("Would you like to include any lowercase characters in your password?");
if (lowercase === true) {
  var newArray = ["a","b","c","d","e",'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z']
  characterTypes.push(newArray);
}
console.log(lowercase);

var uppercase = confirm("Would you like to include any uppercase characters in your password?");
if (uppercase === true) {
  var newArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  characterTypes.push(newArray);
}
console.log(uppercase);

var numbers = confirm("Would you like to include any numbers in your password?");
if (numbers === true) {
  var newArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  characterTypes.push(newArray);
}
console.log(numbers);

var special = confirm("Would you like to include any special characters in ypur password?");
if (special === true) {
  var newArray = [ '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
characterTypes.push(newArray);
}
console.log(special);

console.log(characterTypes);

var yourPassword = "";

for (var i = 0; i < passwordLength; i++) {
  var randomCharacterType =
  characterTypes[Math.floor(Math.random() * characterTypes.length)];
  console.log(randomCharacterType);

if (randomCharacterType === 0){
  console.log("Random Lowercase");
  var asciiCode = String.fromCharCode(randomCharacterCode);
  console.log(asciiCode);
  yourPassword = yourPassword.concat(asciiCode);

} else if (randomCharacterType === 1) {
  console.log("Random uppercase");
  var randomCharacterCode = Math.floor(Math.random() * 17) + 35;
  console.log(randomCharacterCode);
  var asciiCode = String.fromCharCode(randomCharacterCode);
  console.log(asciiCode);
  yourPassword = yourPassword.concat(asciiCode);

} else if (randomCharacterType === 2) {
  console.log("Random number");
  var randomCharacterCode = Math.floor(Math.random() * 6) + 66;
  console.log(randomCharacterCode);
  var asciiCode = String.fromCharCode(randomCharacterCode);
  console.log(asciiCode);
  yourPassword = yourPassword.concat(asciiCode);

} else if (randomCharacterType === 3) {
  console.log("Random special character");
  var randomCharacterCode = Math.floor(Math.random() * 21) + 43;
  console.log(randomCharacterCode);
  var asciiCode = String.fromCharCode(randomCharacterCode);
  console.log(asciiCode);
  yourPassword = yourPassword.concat(asciiCode);

} else {
  alert("You must select a character type.");
  console.log("No character type selected");
}
console.log("Your password is " + yourPassword);
}

return yourPassword;
}

// Write password to the #password input
function writePassword() {
  console.log("Button Clicked");
  var password = generatePassword();
  console.log("PRESENT PASSWORD" + password);
  var passwordText = document.querySelector("#password");

  passwordText.innerHTML = password;

}


generateBtn.addEventListener("click", writePassword);
