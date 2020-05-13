// Palindrome Checker Function

function palindrome(str) {
  var strip = /[\W_]/g; //same as /[^A-Za-z0-9]/g
  var lowCaseStr = str.toLowerCase().replace(strip, '');
  var reverseStr = lowCaseStr.split('').reverse().join(''); 
  return reverseStr === lowCaseStr;
  
}



palindrome("eye");