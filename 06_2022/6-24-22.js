// #Sort array by string length
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

lengthSort = (arr) => {
    let newArr = [];
    let oldArr = arr;
    let longest = ""
    let placeholder
    let duration = arr.length
    for (let i = 0; i < duration; i++) {
        console.log("======")
        for (let j = 0; j < arr.length; j++) {
            if (longest == "") {
                longest = arr[j];
            }
            console.log(arr[j].length);
            if (arr[j].length > longest.length) {
                longest = arr[j];
                placeholder = j
            }
        }
        newArr.push(longest)
        arr.splice(placeholder, 1);
        longest = ""
    }
    arr = oldArr;
    return newArr
}
    myArray = ["no", "hello", "help", "yes"]
    myArray2 = ["no", "sandwich", "survivor", "caller", "hello", "help", "yes"]

    console.log(lengthSort(myArray2));