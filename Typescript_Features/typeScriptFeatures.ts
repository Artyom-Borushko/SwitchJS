
interface DogInterface {
    isInRedBook: true | false;
    canLiveAtHome: CanLiveAtHomeInterface;
}

interface AnimalData {
    typeOfAnimal: string;
    name: string;
}

interface CanLiveAtHomeInterface {
    canLiveAtHome: boolean;
}

abstract class Animal {
    move(distanceInMeters: number = 0): string {
        return `Animal moved ${distanceInMeters}m`;
    }
    abstract getAnimalData(): string;
    abstract setAnimalData(animalInfo: AnimalData): void;
    abstract calculateTaxes(): number;
}

class Dog<T, K> extends Animal implements DogInterface {

    canLiveAtHome: CanLiveAtHomeInterface = { canLiveAtHome: true };
    private animalData: string;

    constructor(
        public height: T,
        public weight: K,
        public isInRedBook: true | false,
        ) {
            super();
            this.isInRedBook = isInRedBook;
    }

    setAnimalData(animalData: AnimalData): void {
        const obj = JSON.stringify(animalData);
        this.animalData = `Animal data is ${obj}, height: ${this.height}, weight: ${this.weight}`;
    }
    getAnimalData(): string {
        return this.animalData;
    }

    calculateTaxes(): number {
        if (typeof this.height === 'number' && typeof this.weight === 'number') {
            return this.height * this.weight * 0.1;
        }
        return -1;
    }
}

const dog = new Dog(10, 20, false);

dog.setAnimalData({
    typeOfAnimal: 'Dog',
    name: 'Jack',
});
console.log(dog.move(10));
console.log(dog.canLiveAtHome);
console.log(dog.calculateTaxes());
console.log(dog.getAnimalData());
