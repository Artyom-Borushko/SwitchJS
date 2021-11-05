

function sum (...args) {
    return Object.assign(
      sum.bind(null, ...args),
      { valueOf: () => args.reduce((prevValue, currentValue) => prevValue + currentValue, 0) }
    )
};

console.log(+sum(2, 3));
console.log(+sum(2)(3));
console.log(+sum(1)(2)(3)(4));
