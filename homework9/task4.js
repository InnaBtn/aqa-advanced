let person = {
    firstName: "Inna",
    lastName: "Bushyna",
    age: 28,
};
person.email = "test@gmail.com";
delete person.age;

console.log(person);