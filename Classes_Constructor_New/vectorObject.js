
class Vector {
    constructor(args) {
        this.args = args;
    };
    
    #lengthVerifier(instance) {
        if (instance.args.length !== this.args.length) throw new Error("Vectors have different length");
    };

    add(instance) {
        try {
            this.#lengthVerifier(instance);
            return this.args.map((elem, index) => elem + instance.args[index]);
        } catch (error) {
            console.error('Error in arguments: ' + error.message);
        }
    };

    subtract(instance) {
        try {
            this.#lengthVerifier(instance);
            return this.args.map((elem, index) => elem - instance.args[index]);
        } catch (error) {
            console.error('Error in arguments: ' + error.message);
        }
    };

    dot(instance) {
        try {
            this.#lengthVerifier(instance);
            return this.args
                .map((elem, index) => elem * instance.args[index])
                .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        } catch (error) {
            console.error('Error in arguments: ' + error.message);
        }
    };

    norm(instance) {
        try {
            this.#lengthVerifier(instance);
            const bitwiseXOR = this.args.map((elem, index) => elem ^ instance.args[index])
                .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            return Math.sqrt(bitwiseXOR);
        } catch (error) {
            console.error('Error in arguments: ' + error.message);
        }
    };

    toString() {
        return this.args.join(', ');
    };

    equals(instance) {
        return this.args.join(',') === instance.args.join(',');
    };
}

const a = new Vector([1, 2, 3]);
const b = new Vector([3, 4, 5]);
const c = new Vector([5, 6, 7, 8]);


// console.log(a.add(b));
// console.log(a.subtract(b));
// console.log(a.dot(b));
// console.log(a.norm(b));
// console.log(a.add(c));
// console.log(a.toString());
// console.log(a.equals(b));
// console.log(a.equals(a));

