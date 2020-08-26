function multiple(a,b) {
    if (typeof a == "number" && typeof b == "number") {
        return a * b;
    }
    else{
        throw new Error('You must be use number!');
    }
}
module.exports = multiple;