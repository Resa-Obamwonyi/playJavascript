//Convert the given number in Roman Numeral


function convertToRoman(num) {
  var romanNum =["M","CM","D","CD","C","XC","L","XL","X", "IX","V","IV","I"];
  var decimalNum = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
var madeRoman = "";
for (var index = 0; index < decimalNum.length; index++) {
    while (decimalNum[index] <= num) {
      madeRoman += romanNum[index];
      num -= decimalNum[index];
    }
  }
 return madeRoman;
}

convertToRoman(36);