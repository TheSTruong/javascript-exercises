const sumAll = function(...args) {
    for (let arg of args) {
        if (typeof arg !== 'number' || arg < 0)
            return "ERROR";
    }
    
    let min = Math.min(...args);
    let max = Math.max(...args);
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};



// Do not edit below this line
module.exports = sumAll;
