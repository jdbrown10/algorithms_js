// DESCRIPTION:
// Given an integer, write a function that returns the sum of all the multiples of 3 and 5 that are equal to or below that integer. For example, given the integer 10, we know that 3, 5, 6, 9, and 10 are all multiples of 3 or 5. The sum of these multiples is 33. 

// NOTES:  
// -Assume the input will always be a positive integer.
// -If the number is a multiple of both 3 and 5, only count it once.

// let MultiplesThreeAndFive = (num) => {
//     //get multiples of 3 and 5
//     //store multiples in an array
//     //add all numbers in array together
//     //return final sum
//     let arr = []
//     for (let i = 3; i<=num; i++) {
//         arr.push(i);
//         i+=2
//     }
//     for (let i = 5; i<=num; i++) {
//         arr.push(i);
//         i+=4
//     }
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 arr.splice(j, 1)
//             }

//         }
//     }
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     console.log(arr)
//     return sum;
// }

let MultiplesThreeAndFive = (num) => {
    let sum = 0
    for (let i = 0; i <=num; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i
        }
    }
    return sum
}

// TESTS:

// Example 1: 
// Input: 10
// Output: 23 (3, 5, 6, 9 are multiples)
console.log(MultiplesThreeAndFive(10));

// Example 2: 
// Input: 15
// Output: 60 (3, 5, 6, 9, 10, 12, 15 are multiples)
console.log(MultiplesThreeAndFive(15));

// Example 3: 
// Input: 21
// Output: 119 (3, 5, 6, 9, 10, 12, 15, 18, 20, 21 are multiples)
console.log(MultiplesThreeAndFive(21));