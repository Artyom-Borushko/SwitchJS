
class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    };
};

class ValidationError extends MyError {
    constructor(message) {
        super(message);
    };
};

function readUser(json) {
    const user = JSON.parse(json);
    if (!user.age) throw new ValidationError(`There's no user field: age`);
    if (!user.name) throw new ValidationError(`There's no user field: name`);
    return user;
};

try {
    const user = readUser('{"age": 22}');
} catch(err) {
    if (err instanceof ValidationError) console.log(`Incorrect data: ${err.message}`);
    else if (err instanceof SyntaxError) console.log(`Error in JSON syntax: ${err.message}`);
};

