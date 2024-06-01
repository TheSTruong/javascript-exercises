const repeatString = function(string, num) {
    let repeat = "";
    if (num < 0)
        return "ERROR"
    for (num; num !== 0; num--)
        repeat += string;
    return repeat;

};

// Do not edit below this line
module.exports = repeatString;
