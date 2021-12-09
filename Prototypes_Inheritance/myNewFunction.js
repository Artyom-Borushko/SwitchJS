

function Person(name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.introduce = function () {
    return `My name is ${this.name} and I am ${this.age}`
};

const john = new Person('John', 30);
const jack = new Person('Jack', 40);
console.log(john.introduce());
console.log(jack.introduce());


function myNew(constructorFunction, ...args) {
    const thisValueObject = Object.create(constructorFunction.prototype);
    constructorFunction.apply(thisValueObject, args);
    return thisValueObject;
};

const july = myNew(Person, 'July', 20);
console.log(july.introduce());
