var upperEl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerEl = "abcdefghijklmnopqrstuvwxyz";
var numEl = "0123456789";
var specialEl = "~!@#$%^&*()_+-=";

var button = document.getElementById("generate");

// Obeject for user choice
var userChoice = {};

// User specific character length
var charLength = parseInt(prompt("Please choose the length of the password between 8 and 128 characters"));

console.log(charLength)

// user input
function promptUser() {
  var numChar = confirm("Would you like numbers?");
  var lowerChar = confirm("Would you like lowercase characters?");
  var upperChar = confirm("Would you like uppercase characters?");
  var specialChar = confirm("Would you like special characters?");



  if (numChar) {
    userChoice["numEl"] = numEl;
  }
  if (lowerChar) {
    userChoice["lowerEl"] = lowerEl;
  }
  if (upperChar) {
    userChoice["upperEl"] = upperEl;
  }
  if (specialChar) {
    userChoice["specialEl"] = specialEl;
  }

  console.log(userChoice);
}  

promptUser();

function writePassword() {
  let finalPassword = '';
  for (var i = 0; i < charLength; i++) {
    let passwordEls = Object.keys(userChoice)
    let randomEl = passwordEls[Math.floor(Math.random() * passwordEls.length)]
    let char = getRandomCharacter(userChoice[randomEl]);

    finalPassword += char;

    console.log('randomCharacter', char);
    console.timeLog(finalPassword, finalPassword.length);
    console.log('>>>>>>>>>>>>>>>>', charLength)
  }



return finalPassword
}

function getRandomCharacter(str) {
  return str[Math.floor(Math.random() * str.length)]
}

writePassword();

button.addEventListener("click", function(){
  password.innerHTML = writePassword();
})

const myInp = document.getElementById("password");
const btnCopy = document.getElementById("copy");

btnCopy.onClick = function(){
  myInp.select();
  document.execCommand("Copy");
}