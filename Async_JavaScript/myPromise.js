
class MyPromise {

    #queue = [];

    constructor(executor) {
      executor(this.resolve.bind(this));
    };

    resolve() {
        queueMicrotask(() => this.#queue.forEach(functionToExecute => functionToExecute()));
    };

    synchThen(fn) {
        fn();
        return this;
    };

    then(fn) {
        this.#queue.push(fn);
        return this;
    };
};

const promise = new MyPromise((resolve) => {
    console.log(1);
    resolve();
}).synchThen(() => {
    console.log(2);
}).then(() => {
    console.log(3);
});
console.log(4);

