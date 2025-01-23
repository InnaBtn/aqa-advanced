function isAdult(age) {  // function declaration
    if (age >= 18) {
        console.log("Person is an adult.");
        return;
    }
    console.log("Person is under age.");
}
isAdult(25);
isAdult(15);


const isAdult2 = function(age) {  // function expression
    if (age >= 18) {
        console.log("Person is an adult.");
        return;
    }
    console.log("Person is under age.");
}  
isAdult2(18);
isAdult2(11);


const isAdult3 = (age) => {  //  arrow function
    if (age >= 18) {
        console.log("Person is an adult.");
        return;
    }
    console.log("Person is under age.");
};
isAdult3(40);
isAdult3(28);


const isAdult4 = age => age >=18 ? console.log("Person is an adult.") :  console.log("Person is under age."); // concise arrow function with ternary operator
isAdult3(17);
isAdult3(19);