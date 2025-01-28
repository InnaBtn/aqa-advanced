function handleNum(number, evenCallback, oddCallback) {
    number % 2 === 0 ? evenCallback(number) : oddCallback(number);
}
function handleEven(number) {
    console.log(`Number ${number} is even.`);
}
function handleOdd(number) {
    console.log(`Number ${number} is odd.`);
}
handleNum(9, handleEven, handleOdd);