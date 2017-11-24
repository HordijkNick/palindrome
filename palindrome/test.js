
var sumbit = document.getElementById("submit");
submit.addEventListener("click", function(){
var woord = document.getElementById("woord").value;
palindrome(woord);
  });
function palindrome(myString){

var removeChar = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();

var checkPalindrome = removeChar.split('').reverse().join('');

document.getElementById("span"); // van frank gekregen.
if(removeChar === checkPalindrome){

  document.getElementById("span").innerHTML=(myString + " is een Palindrome");
}else{

document.getElementById("span").innerHTML=(myString + " is niet een Palindrome");
}
}
