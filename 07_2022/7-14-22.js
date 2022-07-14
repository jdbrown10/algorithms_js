// DESCRIPTION:
// Given an array of integers, write a function that uses the bubble sort algorithm to return a sorted version of the given array.

let bubbleSort = (arr) => {
    let sorted = false
    while (sorted == false) {
        sorted = true
        for (let i = 0; i < arr.length; i++) {
            if (arr[i+1] && arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                sorted = false
            }
        }
    }
    return arr;
}

// TESTS:

// Example 1:
// input: [8, 5, 2, 9, 5, 6, 3]
// output: [2, 3, 5, 5, 6, 8, 9]
console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]))

// Example 2:
// input: [1]
// output: [1]
console.log(bubbleSort([1]))

// Example 3:
// input: [-4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7, 8]
// output: [-10, -7, -7, -6, -6, -5, -5, -4, -4, -4, -2, -1, 1, 3, 5, 5, 6, 8, 8, 10]
console.log(bubbleSort([-4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7, 8]))