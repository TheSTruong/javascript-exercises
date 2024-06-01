const removeFromArray = function() {
    const args = Array.from(arguments);
    let list = args[0];
    const searchList = [];
    // Get arguments
    for (let i = args.length; i > 0; i--) {
        searchList.unshift(args[i]);
    }

    // For each string to remove check if its in the list.
    // If it is then filter it
    for (const i of searchList) {
        if (list.includes(i)) {
            list = list.filter(x => x !== i);
        }
    }
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
