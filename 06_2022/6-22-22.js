// #Simple Pig Latin

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

let pig_it = (str) => {
    if (str == "") {
        return "ay"
    }
    if (str.length == 1) {
        return str + "ay"
    }
    pig = ""
    for (let i = 1; i < str.length; i++) {
        pig += str[i]
    }
    pig += str[0] + "ay"
    return pig
}

console.log(pig_it("survivor"));