// DESCRIPTION:
// Given a string of words, write a function that will return a string of the words written in camel case

let camelCase = (str) => {
    //strings are immutable in js so gonna have to make a new string and concatinate
    //whenever there's a space, set the capitalize variable to true, which will capitalize the next thing that isn't a space
    let camelCased = ""
    let capitalize = false;
    for (let i = 0; i < str.length; i++) {
        if (i == 0) {
            camelCased += str[i].toLowerCase();
        } else if (str[i] == " ") {
            capitalize = true;
        } else {
            if (capitalize == true) {
                camelCased += str[i].toUpperCase();
                capitalize = false;
            } else {
                camelCased += str[i].toLowerCase();
            }
        }
    }
    return camelCased;
}

// TESTS:

// Example 1:
// Input: "Convert this sentence to camel case"
// Output: "convertThisSentenceToCamelCase"
console.log(camelCase("Hello this is a test haha"))

// Example 2:
// Input: "We practice string algorithms"
// Output: "wePracticeStringAlgorithms"
console.log(camelCase("We practice string algorithms"))

// Example 3:
// Input: ""
// Output: ""
console.log(camelCase(""))