// DESCRIPTION:
// Given two arrays of integers, compute the pair of values (one value from each array) with the smallest absolute (non-negative) difference. Return the pair as an array.

let smallestDifference = (arr1, arr2) => {
    let finalValues = [];
    let currentDifference = null;
    let smallestDifference = null;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (smallestDifference == null && arr1[i] > arr2[j]) {
                finalValues = [arr1[i], arr2[j]]
                smallestDifference = arr1[i] - arr2[j]
            }
            if (smallestDifference == null && arr1[i] > arr2[j]) {
                finalValues = [arr1[i], arr2[j]]
                smallestDifference = arr1[i] - arr2[j]
            }
            if (smallestDifference == null && arr1[i] == arr2[j]) {
                finalValues = [arr1[i], arr2[j]]
                smallestDifference = 100000000000000;
            }
            if (arr1[i] >= arr2[j]) {
                currentDifference = arr1[i] - arr2[j];
                console.log(currentDifference);
            } else {
                currentDifference = arr2[j] - arr1[i];
                console.log(currentDifference);
            }
            if (currentDifference < smallestDifference && currentDifference != 0) {
                smallestDifference = currentDifference;
                console.log(smallestDifference)
                finalValues = [arr1[i], arr2[j]]
            }
            console.log(finalValues)
        }
    }
    return finalValues
}

// TESTS:

// Example 1:
// Input : [l, 3, 15, 11, 2],
//         [23, 127, 235, 19, 8] 
// Output : [11, 8] 
console.log(smallestDifference([1, 3, 15, 11, 2], [23, 127, 235, 19, 8] ))


// Example 2:
// Input : [l0, 5, 40],
//         [0, 90, 80]
// Output : [5, 0]
console.log(smallestDifference([10, 5, 40], [0, 90, 80] ))


// Example 3:
// Input : [-1, 5, 10, 20, 3],
//         [26, 134, 135, 15, 17]
// Output : [20, 17]
console.log(smallestDifference([-1, 5, 10, 20, 3], [26, 134, 135, 15, 17] ))


// Example 4:
// Input : [0, 20],
//         [21, -2]
// Output : [20, 21]
console.log(smallestDifference([0, 20], [21, -2] ))