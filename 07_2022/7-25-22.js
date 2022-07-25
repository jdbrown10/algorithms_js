// DESCRIPTION:
// Given a sorted array of integers and a target integer, use the binary search algorithm to determine if the array contains the target. If so, return the i where the target was found, otherwise return -1.

let containsInt = (arr, int) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == int) {
            result.push(i);
        }
    }
    // console.log(result);
    if (result.length == 0) {
        return -1;
    }
    if (result.length == 1) {
        return result[0];
    }
    return result;
}


// TESTS:

// Example 1:
// input: [10, 20, 30, 50, 60, 80, 110, 130, 140, 170], 110
// Output: 6
console.log(containsInt([10, 20, 30, 50, 60, 80, 110, 130, 140, 170], 110))

// Example 2:
// input: [10, 20, 30, 40, 60, 110, 120, 130, 170], 20
// Output: 1
console.log(containsInt([10, 20, 30, 40, 60, 110, 120, 130, 170], 20))

// Example 3:
// input: [10, 20, 30, 40, 60, 110, 120, 130, 170], 175
// Output: -1
console.log(containsInt([10, 20, 30, 40, 60, 110, 120, 130, 170], 175))

// Example 4: 
// input: [], 5
// output: -1
console.log(containsInt([], 5))