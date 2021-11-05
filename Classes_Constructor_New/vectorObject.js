
class Vector {
    constructor(args) {
        this.args = args;
    };
    
    add(instance) {
        try {
            if (instance.args.length > 3) {
                throw new Error(`Maximum arguments length is 3, but ${instance.args.length} provided`)
            }
            const sum = this.args.map((elem, index) => elem + instance.args[index])
            return sum;
        } catch (error) {
            console.log('Error in arguments: ' + error.message);
        }
    };

    subtract(instance) {
        try {
            if (instance.args.length > 3) {
                throw new Error(`Maximum arguments length is 3, but ${instance.args.length} provided`)
            }
            const subtraction = this.args.map((elem, index) => elem - instance.args[index]);
            return subtraction;
        } catch (error) {
            console.log('Error in arguments: ' + error.message);
        }
    };

    dot(instance) {
        try {
            if (instance.args.length > 3) {
                throw new Error(`Maximum arguments length is 3, but ${instance.args.length} provided`)
            }
            const dotMultiply = this.args.map((elem, index) => elem * instance.args[index]);
            const dotSum = dotMultiply.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            return dotSum;
        } catch (error) {
            console.log('Error in arguments: ' + error.message);
        }
    };

    norm(instance) {
        const bitwiseXOR = this.args.map((elem, index) => elem ^ instance.args[index])
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return Math.sqrt(bitwiseXOR);
    };

    toString(instance) {
        const argsAsString = this.args.join(',');
        if (argsAsString === instance.args.join(',')) return 'Instances is the same';
        return 'Instances is not the same'
    }
}

const a = new Vector([1, 2, 3]);
const b = new Vector([3, 4, 5]);
const c = new Vector([5, 6, 7, 8]);
const t = new Vector([1, 2, 3]);

// console.log(a.add(b));
// console.log(a.subtract(b));
// console.log(a.dot(b));
// console.log(a.norm(b));
// console.log(a.add(c));
// console.log(a.subtract(c));
// console.log(a.dot(c));
// console.log(a.toString(t));






