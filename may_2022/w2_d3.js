//Remove deuplicate characters (case sentitive) including punctuation
//keep only the LAST instance of each character
//"Snaps! crackles! pops!" -> "Snrackle ops!"
//try to not use built in functions but it's okay if you do

const dedupe = (str) => {
    //make a new empty string
    var newString = "";
    //use a for loop to iterate through str
    for (let i = str.length - 1; i >= 0; i--) {
        //start this for loop at the position after the index we're checking
        console.log("checking:" + str[i]);
        var found = false;
        for (let j = 0; j < newString.length && !found; j++) {
            //if we find an equal character, break out of the for loop
            if (str[i] ==  newString[j]) {
                found = true;
            }
            //if it doesn't exist in the rest of the string following it, push it to the new empty string
        }
        if (!found) {
            newString = str[i] + newString;
        }
    }
    //return the new string
    return newString;
}

console.log(dedupe("Snaps! crackles! pops!"));
//console.log(dedupe("Did I shine my shoes today?"));
//console.log(dedupe("scoop dedupe!"));