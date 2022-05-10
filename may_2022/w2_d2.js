//Union sorted arrays
//Efficiently combine two pre-sorted arrays into a new sorted array
//no built-in functions
//it's the intersection PLUS each side with its unique numbers. intersections appear only once -> if both arrays have the same number, it only gets listed once in the new array. if an array has [2. 2, 2] and another have [2, 2], we'll have 3 -> pick the amount from the array that has more

const union = (arrLeft, arrRight) => {
    var savedLeft = arrLeft;
    var savedRight = arrRight;
    var newArray = [];
    for (let i = 0; i < arrLeft.length; i++) {
        newArray.push(arrLeft[i]);
        console.log[newArray];
        for (let j = 0; j < arrRight.length && arrLeft[i]; j++) {
            if (arrLeft[i] == arrRight[j]) {
                //i don't REALLY need to set the left values to Null here, but it saves a little time because whether or not the left value exists is part of the consition for the for loop. so as soon as it gets set to null, we exit this for loop. could also use a boolean instead!
                arrLeft[i] = null;
                arrRight[j] = null;
            }
        }
    }
    //at this point, everything from the left array has been pushed into the new Array, and any duplicates from the left to the right have been set to null

    //now we go through the right array and splice the remaining values into the new array
    for (let i = 0; i < arrRight.length; i++) {
        if (arrRight[i]) {
            //using a boolean to determine whether the arrRight number has been spliced or not
            var spliced = false;
            for (let j = 0; j < newArray.length && spliced == false; j++) {
                if (newArray[j] >= arrRight[i]) {
                    newArray.splice(j, 0, arrRight[i]);
                    var spliced = true;
                }
                if (j == newArray.length - 1 && arrRight[i] > newArray[j]) {
                    newArray.push(arrRight[i]);
                    var spliced = true;
                }
            }
        }
    }
    // console.log(arr2);
    arrLeft = savedLeft;
    arrRight = savedRight;
    return newArray;
}

// var arr1 = [1, 5, 6, 9];
// var arr2 = [2, 6, 10];
// console.log(union(arr1, arr2));

console.log(union([2,4,7,9,10],[2,3,5,7,9,10]));
console.log(union([1,2,2,2,7],[2,2,6,6,7]));
console.log(union([1,5,9],[2,6,10]));