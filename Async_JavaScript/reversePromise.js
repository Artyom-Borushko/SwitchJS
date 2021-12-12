
class ReversePromise {

    #queue = [];

    constructor(executor) {
      executor(this.resolve.bind(this));
    };

    resolve() {
        queueMicrotask(() => this.#queue.forEach(functionToExecute => functionToExecute()));
    };

    then(fn) {
        this.#queue.unshift(fn);
        return this;
    };
};

const reversePromise = new ReversePromise((resolve) => {
    console.log(1);
    resolve();
})
.then(() => console.log(2))
.then(() => console.log(3))
.then(() => console.log(4))

