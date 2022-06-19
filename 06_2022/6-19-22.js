//Given an array of numbers and a target value, return true if there are any 2 elements in the array that can be multiplied together to produce the target value. You cannot multiply an element with itself, but it is possible for a number to repeat more than once in the array.

function targetProduct (arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] * arr[j] == target) {
                return true
            }
        }
    }
    return false
}

console.log(targetProduct([1, 8], 64))
console.log(targetProduct([8, 1, 8], 64))
console.log(targetProduct([10, 4, 5, 6, 3, 2], 12))
console.log(targetProduct([1, 8, 7, 3, 8, 13], 47))