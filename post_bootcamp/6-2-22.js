/* #Mumbling
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z. */

const mumble = (str) => {
    var newStr = "";
    var counter = 1;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < counter; j++) {
            newStr = newStr + str[i];
            console.log(str[i])
        }
        counter++;
    }
    return newStr;
}

var myStr = "hello"

console.log(mumble(myStr));