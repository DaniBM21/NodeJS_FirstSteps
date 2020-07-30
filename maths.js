const Math = {};

function add(x1, x2) {
    return x1 + x2;
}

function substract(x1, x2) {
    return x1 - x2;
}

function multiply(x1, x2) {
    return x1 * x2;
}

function divide(x1, x2) {

    if (x2 == 0) {
        console.log("Imposible to solve this operation");
    }
    return x1 / x2;
}

// Export functions to use in another file
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports =  Math; 