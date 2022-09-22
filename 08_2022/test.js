var count = 6;
var x = [1,3,0,2,2,4]
let p = 0;
for (let i = 1; i < count; i++) {
    if (x[i] > x[i-1]) {
        p++;
    }
}
console.log(p);