class Animal {
    move(distanceInMeters = 0) {
        console.log(`Animal moved ${distanceInMeters}m`);
    }
}
class Dog extends Animal {
    constructor(key, value) {
        super();
        this.key = key;
        this.value = value;
        this.isInRedBook = false;
        this.canLiveAtHome = { canLiveAtHome: 'yes' };
    }
    animalType(animalInfo) {
        let obj = JSON.stringify(animalInfo);
        console.log(`Animal data is ${obj}, ${this.key}, ${this.value}`);
        return animalInfo;
    }
}
const dog1 = new Dog(1, 'First');
dog1.move(10);
let passedObj = {
    typeOfAnimal: 'Dog',
    name: 'Jack'
};
dog1.animalType(passedObj);
console.log(dog1.canLiveAtHome);
console.log(dog1.key);
