function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Both arguments must be numbers.");
    }
    return numerator / denominator;
}

try {
    console.log(divide(10, 2));
} catch (error) {
    console.error("Error occured:", error.message);
}

try {
    console.log(divide(20, 0));
} catch (error) {
    console.error("Error occured:", error.message);
}

try {
    console.log(divide("20", 2));
} catch (error) {
    console.error("Error occured:", error.message);
}

try {
    console.log(divide(10, true));
} catch (error) {
    console.error("Error occured:", error.message);
} finally {
    console.log("Work is complete.");
}
