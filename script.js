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
}

if (numChar) {
  userChoice["numEl"] = numEl;
}
if (lowerChar) {
  userChoice["lowerEl"] = lowerEl;
}
if (upperChar) {
  userChoice["upperEl"] = upperEl;
}
if (special) {
  userChoice["specialEl"] = specialEl;
}