//leetcode problems

/* Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true. */

let FizzBuzz = (n) => {
    let answer = []
    for (let i = 1; i <= n; i++) {
        if (i % 15 == 0) {
            answer.push("FizzBuzz");
        } else if (i % 3 == 0) {
            answer.push("Fizz");
        } else if (i % 5 == 0) {
            answer.push("Buzz");
        } else {
            let string = i.toString();
            answer.push(string);
        }
    }
    return answer;
}

// console.log(FizzBuzz(30))

/* Given a roman numeral, convert it to an integer. */

const conversion = {"M": 1000, "D":500, "C":100, "L":50, "X":10, "V":5, "I":1}

var romanToInt = function(s) {

    const array = s.split('');

    let total = 0;
    let current;
    let currentValue;
    let next;
    let nextValue;

    for (let i=0; i < array.length; i++){
        current = array[i];
        currentValue = conversion[current]

        next = array[i+1]
        nextValue = conversion[next]

        if (currentValue < nextValue){
            total -= (currentValue);
        } else {
            total += (currentValue);
        }
    }

    return total;
}

console.log(romanToInt("XIV"))