
class MyPromise {
    constructor(then) {
        this.then = then;
    };

    synchThen(mapper) {
        return new Promise((resolve) => this.then(
            x => resolve(mapper(x)),
            resolve
        ))
    };

    then(mapper) {
        return new Promise((resolve, reject) => this.then(
            x => mapper(x).then(resolve, reject),
            resolve
        ))
    }
};

const promise = new MyPromise((resolve) => {
    console.log(1);
    resolve();
}).synchThen(()	=>	{
    console.log(2);
}).then(()	=>	{
    console.log(3);
})
console.log(4);


