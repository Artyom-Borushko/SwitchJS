

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


// const namedOne = new NamedOne("Naomi");
// namedOne.fullName;


// const namedTwo = new NamedOne("Naomi", "Wang", 20);
// const namedThree = new NamedOne("Wang", "Naomi", 2);

// function getAverageAge(...users) {
//     return users.reduce((accumulator, user) => accumulator + user.age, 0) / users.length;
// };
// console.log(getAverageAge(namedTwo, namedThree));

