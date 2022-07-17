// DESCRIPTION:
// Given an array nums of distinct integers, return a 2D array of all possible permutations. You can return the answer in any order.

// NOTES:
// -A permutation of an array of integers is a arrangement of its members in varying sequences
// -All the integers of nums are unique

const allPermutations = (inputArr) => {
    let result = [];

    const permute = (arr, x = []) => {
        if (arr.length === 0) {
            result.push(x)
        } else {
            for (let i = 0; i < arr.length; i++) {
                let current = arr.slice();
                let next = current.splice(i, 1);
                permute(current.slice(), x.concat(next))
            }
        }
    }

    permute(inputArr)

    return result;
}

// TESTS:

// Example 1:
// input: [1,2,3]
// output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(allPermutations([1,2,3]))

// Example 2:
// input: [0,1]
// output: [[0,1],[1,0]]

// Example 3:
// input: [1]
// output: [[1]]

//========================================================================

// DESCRIPTION:
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order. Write a function that takes in those arrays and merges the two arrays sorted in non-decreasing order

const mergeSort = (left, right) => {
    let arr = []
    // Break out of loop if either array is empties
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            //.shift removes the first element from an array and returns that removed element
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // in case we didn't go through the entire left or right array, use spread operator to combine the three arrays (spread operator with arrays spreads their indexes and values)
    return [ ...arr, ...left, ...right ]
}

// TESTS:

// Example 1:
// Input: nums1 = [1,2,3], nums2 = [2,5,6]
// Output: [1,2,2,3,5,6]
console.log(mergeSort([1,2,3],[2,5,6]))

// Example 2:
// Input: nums1 = [1], nums2 = []
// Output: [1]
console.log(mergeSort([1],[]))

// Example 3:
// Input: nums1 = [1,3,5,7,9], nums2 = [0,2,4,6,8]
// Output: [0,1,2,3,4,5,6,7,8,9]
console.log(mergeSort([1,3,5,7,9],[0,2,4,6,8]))