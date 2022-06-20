//DESCRIPTION 
//Given a sorted array and a number x, find the pair of numbers in the array whose sum is closest to x

function closestSum(arr,  x) {
    if (arr.length > 1) {
        var winningPair = [arr[0], arr[1]]
    } else {
        var winningPair = [arr[0], arr[0]]
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((Math.abs(x - (arr[i] + arr[j]))) < (Math.abs(x - (winningPair[0] + winningPair[1])))) {
                winningPair = [arr[i], arr[j]]
            }
        }
        
    }
    return winningPair
}

//TESTS
console.log(closestSum([10, 22, 28, 29, 30, 40], 54))
//Output: 22 and 30

console.log(closestSum([1, 3, 4, 7, 10], 15))
//Output: 4 and 10