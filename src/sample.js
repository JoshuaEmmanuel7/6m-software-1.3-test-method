const addFunc = (a, b, c) => {
    return a + b + c;
}

const isDivisibleBy5 = (num1) => {
    if (num1 % 5 == 0){
        return true;
    } else {
        return false;
    }
}
const checkEvenOdd = (num2) => {
    if (num2 % 2 == 0){
        return 'even';
    } else {
        return 'odd';
    }
}

module.exports = {
    addFunc,
    isDivisibleBy5,
    checkEvenOdd
}