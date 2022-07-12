// DESCRIPTION:
// Given an array on integers, write a function that will return true or false depending on if the array is monotonic.

// NOTE:
// -Monotonic means either the array is in increasing order or in decreasing order
// -Empty arrays or arrays with just one element are also monotonic

let isMonotonic = (arr) => {
    if (arr.length == 0 || arr.length == 1) {
        return true
    }
    let arrLength = arr.length
    let increasingCounter = 1
    let decreasingCounter = 1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i+1] && arr[i] <= arr[i+1]) {
            increasingCounter += 1;
        }
        if (arr[i+1] && arr[i] >= arr[i+1]) {
            decreasingCounter += 1;
        }
    }
    if (arrLength == increasingCounter || arrLength == decreasingCounter) {
        return true
    }
    return false
}

// TESTS:

// Example 1:
// input: [1, 2, 2, 3, 6, 8, 13, 13, 15, 22, 54]
// output: true
console.log(isMonotonic([1, 2, 2, 3, 6, 8, 13, 13, 15, 22, 54]))

// Example 2:
// input: [6]
// output: true
console.log(isMonotonic([6]))

// Example 3:
// input: []
// output: true
console.log(isMonotonic([]))

// Example 4:
// input: [-1, -5, -10, -1100, -900, -1101, -1102, -9001]
// output: false
console.log(isMonotonic([-1, -5, -10, -1100, -900, -1101, -1102, -9001]))

// Example 5:
// input: [1, 2, 2, 1, 3, 6, 8, 13, 12, 15]
// output: false
console.log(isMonotonic([1, 2, 2, 1, 3, 6, 8, 13, 12, 15]))