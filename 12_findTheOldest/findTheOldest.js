function findAge(deathYear, birthYear) {
    if (!deathYear) {
        return new Date().getFullYear() - birthYear;
    }
    return deathYear - birthYear;
}

const findTheOldest = function (array) {
    let persons = array.reduce((oldest, nextPerson) => {
        let oldestAge = findAge(oldest.yearOfDeath, oldest.yearOfBirth);
        let personAge = findAge(nextPerson.yearOfDeath, nextPerson.yearOfBirth);
        return oldestAge > personAge ? oldest : nextPerson;
    })

    return persons

};

// Do not edit below this line
module.exports = findTheOldest;
