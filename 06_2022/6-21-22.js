//DESCRIPTION
//Complete the solution so that it reverses the string passed into it.

function reverseString(str){
    backwards = ""
    for (var i = str.length - 1; i >= 0; i--) {
        backwards += str[i];
    }
    return backwards;
}

console.log(reverseString("potato"));