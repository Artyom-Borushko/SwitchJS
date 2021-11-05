

function NamedOne(fName, lName) {

    return {
        fName,
        lName,

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
            return `${this.fName} ${this.lName}`
        },

        set fullName(newFullName) {
            const arr = newFullName.split(' ');
            if (arr.length < 2) return;
            [this.fName, this.lName] = arr;
        },
    };
};


const namedOne = new NamedOne("Naomi", "Wang");
// console.log(namedOne.firstName);
// namedOne.firstName = 'Artyom'
// console.log(namedOne.firstName);

// console.log(namedOne.lastName);
// namedOne.lastName = 'Borushko'
// console.log(namedOne.lastName);

// console.log(namedOne.fullName);
// namedOne.fullName = 'Artyom Borushko'
// console.log(namedOne.fullName);

// namedOne.fullName = 'Artyom Borushko'
// console.log(namedOne.firstName);
// console.log(namedOne.lastName);

// namedOne.fullName = 'ArtyomBorushko'
// console.log(namedOne.fullName);

