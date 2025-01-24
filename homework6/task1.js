function rectangleAreaDec(width, height) {  // function declaration
    return width * height;
}
console.log(rectangleAreaDec(5, 10));


const rectangleAreaExp = function(width, height) { // function expression
    return width * height;
}
console.log(rectangleAreaExp(5, 10));


const rectangleAreaArr = (width, height) => { // arrow function expression
    return width * height;
}
console.log(rectangleAreaArr(5,10));


const rectabgleAreaConc = (width, height) => width * height; // concise arrow function
console.log(rectangleAreaArr(5,10));