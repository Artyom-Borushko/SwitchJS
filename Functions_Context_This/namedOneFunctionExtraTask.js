

function NamedOne(fName, lName, personAge) {
    
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


const namedTwo = new NamedOne("Naomi", "Wang", 20);
const namedThree = new NamedOne("Wang", "Naomi", 2);

NamedOne.getAverageAge = function(...users) {
    return users.reduce((accumulator, user) => accumulator + user.age, 0) / users.length;
};
// console.log(NamedOne.getAverageAge(namedTwo, namedThree));

// const namedOne = new NamedOne("Naomi");
// namedOne.fullName;

