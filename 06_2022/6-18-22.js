// DESCRIPTION:
// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid. All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// A string of braces is considered valid if all braces are matched with the correct brace.

function validBraces(braces){
    while(braces.indexOf("{}") != -1 || braces.indexOf("()") != -1 || braces.indexOf("[]") != -1) {
        braces = braces.replace("{}", "").replace("()", "").replace("[]", "");
    }
    return braces.length == 0;
}

console.log(validBraces("(){}[]")) //True
console.log(validBraces("([{}])")) //True
console.log(validBraces("(}")) //False
console.log(validBraces("[(])")) //False
console.log(validBraces("[({})](]")) //False