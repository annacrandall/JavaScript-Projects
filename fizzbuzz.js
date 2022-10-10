const fizzBuzz = (totalCount = 100) => {
    let result = []; cd
    for (let index = 1; index < totalCount ; index++) {
        const isDivisibleByThree = index % 3 === 0;
        const isDivisibleByFive = index % 5 === 0;
        if (isDivisibleByThree && isDivisibleByFive) {
            result.push("FizzBuzz");
        } else if (isDivisibleByFive) {
            result.push("Buzz");
        } else if (isDivisibleByThree) {
            result.push("Fizz");
        } else {
            result.push(index.toString())
        }
        
    }
    return result; 
} 

console.log(fizzBuzz())