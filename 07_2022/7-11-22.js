// DESCRIPTION:
// Given a string, write a function that will detect whether or not it is a pangram. Return true if it is, and false if not. 

let isPangram = (str) => {
    let strLowerCase = str.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (let i = 0; i < alphabet.length; i++) {
        if (strLowerCase.indexOf(alphabet[i]) < 0) { //.indexOf returns the first index at which a given element can be found in the array, or -1 if it is not present.
            return false;
        }
    }
    return true;
}

// NOTES:
// -A pangram is a sentence that contains every single letter of the alphabet at least once
// -Pangrams are not case sensitive
// -You may ignore numbers and punctuation.


// TESTS:

// Example 1:
// input: "The quick brown fox jumps over the lazy dog"
// output: true

// Example 2:
// input: "The quick brown fox jumps"
// output: false

// Example 3:
// input: ""
// output: false

// Example 4:
// input: "Watch "Jeopardy!", Alex Trebek's fun TV quiz game"
// output: true