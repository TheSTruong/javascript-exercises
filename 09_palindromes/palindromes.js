const palindromes = function (string) {
    const validChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let stringFiltered = string.toLowerCase().split("").filter((char) => validChars.includes(char)).join("");
    let filteredReversed = stringFiltered.split('').reverse().join('');
    return stringFiltered === filteredReversed;
};

// Do not edit below this line
module.exports = palindromes;
