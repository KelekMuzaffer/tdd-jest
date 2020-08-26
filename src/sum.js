// Implement the sum function here
function sum(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        return a + b;
    }
    else{
         throw new Error('You must be use number!');
    }
}
module.exports = sum;

