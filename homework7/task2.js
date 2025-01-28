function numberDecreasing(num) {
    console.log(num);
    if (num > 0) {
    numberDecreasing(num - 1);
    }
}
numberDecreasing(4);
