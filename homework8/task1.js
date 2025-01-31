const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positiveCount++;
    }
    else if (numbers[i] < 0) {
        negativeCount++;
    }
    else zeroCount++;

}
console.log("Amount of positive numbers: " + positiveCount);
console.log("Amount of negative numbers: " + negativeCount);
console.log("Amount of zero numbers: " + zeroCount);