// Assignment Code
var generateBtn = document.querySelector("#generate");



//Creating password objet.
var pwdCriteria = {

  pwdLength: 0,

  pwdLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  pwdUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  pwdNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  pwdCharacter: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
    "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]//32
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // var result=[];
  var result = "";
  var passwordLength = 0;
  var upperCase;
  var lowerCase;
  var numbers;
  var specialChar;

  var lc;
  var uc;
  var num;
  var sc;

  passwordLength = 0;
  pwdCriteria.pwdLength = 0;
  result = "";

  while (passwordLength < 8 || passwordLength > 128 || passwordLength != null) {

    // 
    // left off here checking if number is an integer 
    // (if not number.isintiger then ask again)
    // 

    passwordLength = prompt("How many characters do you want your password to be? \nPassword must be between 8 and 128 characters."); // also add cancel feature
    console.log("passwordLength = " + passwordLength);
    if (!isFinite(passwordLength)) {
      alert("You did not enter a number");
      return "Your secure password";

    } else {


      lowerCase = confirm("Do you want to use lower case letters?");
      upperCase = confirm("Do you want to use upper case letters?");
      numbers = confirm("Do you want to use numbers?");
      specialChar = confirm("Do you want to use any special characters?");

      while (pwdCriteria.pwdLength < passwordLength) {

        //if statement to make sure the user selects at least one of the criteria  
        if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
          alert("You must select at least one criteria of lowercase, uppercase, numbers or special characters")

          lowerCase = confirm("Do you want to use lower case letters?");
          upperCase = confirm("Do you want to use upper case letters?");
          numbers = confirm("Do you want to use numbers?");
          specialChar = confirm("Do you want to use any special characters?");
        }
        else {

          if (lowerCase === true && pwdCriteria.pwdLength < passwordLength) {
            lc = pwdCriteria.pwdLowerCase[Math.floor(Math.random() * 26)]
            result = result + lc;
            pwdCriteria.pwdLength = pwdCriteria.pwdLength + 1;
            console.log(lc);
            console.log("pwdCriteria.pwdLength " + pwdCriteria.pwdLength);
            console.log("passwordLength " + passwordLength);
          }
          if (specialChar === true && pwdCriteria.pwdLength < passwordLength) {
            sc = pwdCriteria.pwdCharacter[Math.floor(Math.random() * 32)]
            result = result + sc;
            pwdCriteria.pwdLength = pwdCriteria.pwdLength + 1;
            console.log(sc);
            console.log("pwdCriteria.pwdLength " + pwdCriteria.pwdLength);
            console.log("passwordLength " + passwordLength);
          }
          if (upperCase === true && pwdCriteria.pwdLength < passwordLength) {
            uc = pwdCriteria.pwdUpperCase[Math.floor(Math.random() * 26)]
            result = result + uc;
            pwdCriteria.pwdLength = pwdCriteria.pwdLength + 1;
            console.log(uc);
            console.log("pwdCriteria.pwdLength " + pwdCriteria.pwdLength);
            console.log("passwordLength " + passwordLength);
          }
          if (numbers === true && pwdCriteria.pwdLength < passwordLength) {
            num = pwdCriteria.pwdNumber[Math.floor(Math.random() * 10)]
            result = result + num;
            pwdCriteria.pwdLength = pwdCriteria.pwdLength + 1;
            console.log(num);
            console.log("pwdCriteria.pwdLength " + pwdCriteria.pwdLength);
            console.log("passwordLength " + passwordLength);
          }
        }
      }
    }
    return result;

    // pwdCriteria.pwdLength = passwordLength;

    // console.log (passwordLength);
    // console.log (pwdCriteria.pwdLength);
    // console.log (upperCase);
    // console.log (lowerCase);
    // console.log (numbers);
    // console.log (specialChar);
    // console.log (lc);
    // console.log (uc);
    // console.log (num);
    // console.log (sc);
    // console.log (result);
    // console.log(result.length);

  }
}

//
