// Assignment Code
var generateBtn = document.querySelector("#generate");



//Creating password objet.
var pwdCriteria = {

  pwdLength: 0,

  pwdLowerCase:["a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z"],

  pwdUpperCase:["A","B","C","D","E","F","G","H","I","J","K","L",
  "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],

  pwdNumber:[0,1,2,3,4,5,6,7,8,9],

  pwdCharacter:["!","\"","#","$","%","&","\'","(",")","*","+",",",
  "-",".","/","\\",":",";","<",">","=","?","@","[","]","^","_","`","{","}","|","~"]//32
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
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

while (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("How many characters do you want your password to be?"); //add second line to say password must be between 8 and 128 characters.  also add cancel feature

}

  lowerCase = confirm("Do you want to use lower case letters?");
  upperCase = confirm("Do you want to use upper case letters?");
  numbers = confirm("Do you want to use numbers?");
  specialChar = confirm("Do you want to use any special characters?");

  while (pwdCriteria.pwdLength < passwordLength){
    
    if (lowerCase = true) {
      lc = pwdCriteria.pwdLowerCase[Math.floor(Math.random()*26)]
      
      result = result + lc;
      // result.push(lc);
      pwdCriteria.pwdLength = pwdCriteria.pwdLength + 1;
    }
    if (specialChar = true) {
      sc = pwdCriteria.pwdCharacter[Math.floor(Math.random()*32)]
      result = result + sc;
      // result.push(sc);
      pwdCriteria.pwdLength = pwdCriteria.pwdLength + 1;
    }
    if (upperCase = true) {
      uc = pwdCriteria.pwdUpperCase[Math.floor(Math.random()*26)]
      result = result + uc;
      // result.push(uc);
      pwdCriteria.pwdLength = pwdCriteria.pwdLength + 1;
    }
    if (numbers = true) {
      num = pwdCriteria.pwdNumber[Math.floor(Math.random()*10)]
      result = result + num;
      // result.push(num);
      pwdCriteria.pwdLength = pwdCriteria.pwdLength + 1;
    }

    
    

    
  
  }
  // return result;

 // pwdCriteria.pwdLength = passwordLength;

  // console.log (passwordLength);
  // console.log (pwdCriteria.pwdLength);
  // console.log (upperCase);
  // console.log (lowerCase);
  // console.log (numbers);
  // console.log (specialChar);
  console.log (lc);
  console.log (uc);
  console.log (num);
  console.log (sc);
  console.log (result);
  console.log(result.length);

}


//
