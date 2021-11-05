

function runningAverage() {
    const initialStorage = [];
    return function (value) {
        initialStorage.push(value);
        let sumOfArrayElements = 0;
        for (let index = 0; index < initialStorage.length; index++) {
            sumOfArrayElements += initialStorage[index];
        };
        return sumOfArrayElements / initialStorage.length
    };
};

const rAvg = runningAverage();
console.log(rAvg(10));
console.log(rAvg(11));
console.log(rAvg(12));
