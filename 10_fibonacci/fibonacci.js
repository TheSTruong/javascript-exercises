const fibonacci = function (num) {
    let number = num;
    if (typeof number !== 'number') {
        number = parseInt(number);
    };
    if (number < 0) return "OOPS";
    let fibArray = [0, 1];
    for (let i = 2; i <= number; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
    return fibArray[number];


}

// Do not edit below this line
module.exports = fibonacci;
