/* ###############################################################

:graduation: ALGO CHALLENGE DAY #2 @everyone 

👇🏻 
#DNA to RNA Conversion

Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"


The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'. */

const DNAtoRNA = (DNA) => {
    var RNA = "";
    for (let i = 0; i < DNA.length; i++) {
        if (DNA[i] == "G") {
            RNA += "G"
        } else if (DNA[i] == "C") {
            RNA += "C"
        } else if (DNA[i] == "A") {
            RNA += "A"
        } else if (DNA[i] == "T") {
            RNA += "U"
        }
    }
    return RNA;
}

var myDNA = "GCATTCTAGCGAT"
console.log(myDNA);
console.log(DNAtoRNA(myDNA));