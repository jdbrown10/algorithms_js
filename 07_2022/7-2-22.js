// DESCRIPTION:
// Write a function that takes in a string of one or more words, and returns the same string, but with all words of five or more letters reversed.

// NOTES:
// -Strings passed in will consist of only letters and spaces.
// -Spaces will be included only when more than one word is present.

let reverseFives = (str) => {
    let newStr = "";
    let forward = "";
    let backward = "";
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            forward = forward + str[i];
            backward = str[i] + backward;
            counter++;
        }
        if (str[i] == " " || i == str.length - 1) {
            if (counter >= 5) {
                newStr = newStr + backward;
                forward = ""
                backward = ""
            } else {
                newStr = newStr + forward;
                forward = ""
                backward = ""
            }
            counter = 0;
            if (str[i] == " ") {
                newStr += " "
            }
        }
    }
    return newStr;
}


// TESTS:

// Example 1:
// Input: "This is a test"
// Output: "This is a test"
console.log(reverseFives("This is a test"))

// Example 2:
// Input: "This is another test" 
// Output: "This is rehtona test" 
console.log(reverseFives("This is another test"))

// Example 3:
// Input: "Hey fellow programmers"
// Output: "Hey wollef sremmargorp"
console.log(reverseFives("Hey fellow programmers"))