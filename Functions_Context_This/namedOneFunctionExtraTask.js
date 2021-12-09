

function NamedOne(fName, lName, personAge) {

    (function () {
        if (personAge) NamedOne.ageOfAllInstances.push(personAge);
    })();

    return {
        fName,
        lName,
        personAge,

        get firstName() {
            return this.fName;
        },
        set firstName(newName) {
            this.fName = newName;
        },
        get lastName() {
            return this.lName;
        },
        set lastName(newLastName) {
            this.lName = newLastName;
        },
        get fullName() {
            if (this.lName === undefined) {
                this.lName = prompt('Please, enter last name', 'Borushko')
            };
            return `${this.fName} ${this.lName}`;
        },
        set fullName(newFullName) {
            const arr = newFullName.split(' ');
            if (arr.length === 2) [this.fName, this.lName] = arr;
        },
        get age() {
            return this.personAge;
        },
    };
};
NamedOne.ageOfAllInstances = [];
NamedOne.getAverageAge = function() {
    return NamedOne.ageOfAllInstances.reduce((prevValue, currValue) => prevValue + currValue, 0) / NamedOne.ageOfAllInstances.length;
};

const namedTwo = new NamedOne("Naomi", "Wang", 20);
console.log(NamedOne.getAverageAge())

const namedThree = new NamedOne("Wang", "Naomi", 2);
console.log(NamedOne.getAverageAge())

// NamedOne.getAverageAgeByInstances = function(...users) {
//     return users.reduce((accumulator, user) => accumulator + user.age, 0) / users.length;
// };
// console.log(NamedOne.getAverageAgeByInstances(namedTwo, namedThree));

// const namedOne = new NamedOne("Naomi");
// namedOne.fullName;

