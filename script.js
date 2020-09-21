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
