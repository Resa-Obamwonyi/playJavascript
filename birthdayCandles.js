/*
You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she'll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.
For example, if your niece is turning 4 years old, and the cake will have 4 candles of height |4, 4, 1, 3| she will be able to blow out 2 candles successfully, since the tallest candles are of height 4 and there are 2 such candles. 
Note that this functions takes an array as a parameter or argument.
Sample Input
4, 4, 1, 3
Sample Output
2
Test Cases:
1) 18 90 90 13 90 75 90 8 90 43
2) 82 49 82 82 41 82 15 63 38 25
3) 44 53 31 27 77 60 66 77 26 36
4) 1000 1000 1000 1000 1000 800 1000 1000 1000 1000 1000 1000 1000 900 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000
Expected Output:
1) 5
2) 4
3) 2
4) 24
Level:
Beginner

*/


function birthdayCandles(arr){
//set age to maximum number in array  
const age = Math.max(...arr);
//filter the array for age
const frequencyOfHighestCandles =arr.filter(item=>item===age);
//return filtered array's length
return frequencyOfHighestCandles.length;

}
console.log (birthdayCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]));
console.log (birthdayCandles([82, 49, 82, 82, 41, 82, 15, 63, 38 ,25]));
console.log (birthdayCandles([44, 53, 31, 27, 77, 60, 66, 77, 26, 36]));
console.log (birthdayCandles([1000, 1000, 1000, 1000, 1000, 800, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 900, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000]));
