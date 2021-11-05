interface DogInterface {
    animalType(animalInfo: AnimalTypeParam): AnimalTypeParam;
    isInRedBook: true | false;
    canLiveAtHome: CanLiveAtHomeInterface;
}

interface AnimalTypeParam {
    typeOfAnimal: string;
    name: string
}

interface CanLiveAtHomeInterface {
    canLiveAtHome: string;
}

abstract class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m`);
    }
    abstract animalType<T>(typeOfAnimal: T);
}

class Dog<TKey, TValue> extends Animal implements DogInterface{
    constructor(
        public key: TKey,
        public value: TValue
        ) {
            super();
    }
    isInRedBook: false = false;

    public canLiveAtHome: CanLiveAtHomeInterface = { canLiveAtHome: 'yes' };

    animalType<T>(animalInfo: T): T {
        let obj = JSON.stringify(animalInfo)
        console.log(`Animal data is ${obj}, ${this.key}, ${this.value}`);
        return animalInfo;
    }
}
const dog1 = new Dog(1, 'First');
dog1.move(10);
let passedObj: AnimalTypeParam = {
    typeOfAnimal: 'Dog',
    name: 'Jack'
}
dog1.animalType(passedObj);
console.log(dog1.canLiveAtHome)
console.log(dog1.key);
