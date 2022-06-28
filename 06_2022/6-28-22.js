// DESCRIPTION:
// Given an integer array sorted in ascending order, return a new array of the squares of each number sorted in ascending order.


//I know there's probably a more efficient way of doing this
let SquareAndSort = (arr) => {
    //get the squared values into a new array
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]*arr[i]);
    }
    //sort the new array -> used bubble sort here, but could do it any number of ways
    let sorted = false;
    while (sorted == false) {
        sorted = true;
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i] > newArr[i+1]) {
                let temp = newArr[i+1];
                newArr[i+1] = newArr[i];
                newArr[i] = temp;
                sorted = false;
            }
        }
    }
    return newArr;
}


// TESTS:

// Example 1:
// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
console.log(SquareAndSort([-4,-1,0,3,10]));

// Example 2:
// Input: [-5, -4, -3, -2, -1]
// Output: [1, 4, 9, 16, 25]
console.log(SquareAndSort([-5, -4, -3, -2, -1]));

// Example 3:
// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
console.log(SquareAndSort([-7,-3,2,3,11]));