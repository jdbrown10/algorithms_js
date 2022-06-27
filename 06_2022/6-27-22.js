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

//============================

// DESCRIPTION:
// Given an array of integers, return an array of all the integers that occur an odd number of times. The returned array may list the integers in any order

let oddOccurrances = (arr) => {
    let oddArr = [];
    let savedArr = arr;
    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
                arr.splice(j, 1)
            }
        }
        if (count % 2 == 1) {
            oddArr.push(arr[i]);
        }
    }
    arr = savedArr;
    return oddArr;
}


// TESTS:

// Example 1:
// Input: [7] 
// Output: 7
console.log(oddOccurrances([7]))

// Example 2:
// Input: [1,2,2,3,4,5,5,] 
// Output: [1,3,4]
console.log(oddOccurrances([1,2,2,3,4,5,5,]))

// Example 3:
// Input: [1,1,2,7,8,8,8,4,11, 6, 6] 
// Output: [2, 7, 8, 4, 11]
console.log(oddOccurrances([1,1,2,7,8,8,8,4,11, 6, 6]))