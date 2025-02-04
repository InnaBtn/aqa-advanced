let car1 = {
    brand: "Toyota",
    model: "Corolla Cross",
    year: 2024,
};
let car2 = {
    brand: "Audi",
    model: "A6",
    owner: "James Smith",
};
let car3 = { ...car1, ...car2 };

console.log(car3);