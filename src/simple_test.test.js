const {addFunc, isDivisibleBy5,checkEvenOdd} = require("./sample");

describe("Test Suite for sample.js functions", ()=>{
    
    it("should add 3 numbers", ()=>{
        const result = addFunc(1, 3, 4);
        expect(result).toBe(8);
    })

    it("should check divisibility by 5", ()=>{
        const result = isDivisibleBy5(10);
        expect(result).toBe(true);
    })  
    it("should check if a number is even or odd", ()=>{
        const result = checkEvenOdd(10);
        expect(result).toBe('even');
    })

})
//So when the command `npm run test` is run, it calls the test suite and runs the individual tests.
