let users = [
    { name: "John", age: 20, email: "john@gmail.com" },
    { name: "Tom", age: 22, email: "tom@gmail.com" },
    { name: "Ron", age: 18, email: "ron@gmail.com" },
];

for (let user of users) {
    console.log(`User ${user.name} is ${user.age} years old. ${user.name}'s email: ${user.email}.`);
};

for (let { name, age, email } of users) {
    console.log(`${name}'s email is ${email}. User is ${age} years old.`);
};


