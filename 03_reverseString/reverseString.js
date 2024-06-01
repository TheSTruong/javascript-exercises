const reverseString = function(string) {
    //let reversed = ''
    // For loop implementation
    // for (let i = string.length; i > 0; i--) {
    //     reversed += string[i-1];
    // }
    // For loop implementation

    let reversed = string.split("").reverse().join("");
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
