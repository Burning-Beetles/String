
// 1) Take a string and print its charcaters in reverse
// Abhi => ihbA 

let str = "Abhi"

// console.log(str.split("").reverse().join(""))

// let s = ""
// for(let i = str.length-1; i>=0; i--){
//     s = s+str[i]
// }
// console.log(s)  // ihbA

let s = ""
for(i = 0; i<str.length; i++){ //  A b h i
//    console.log(str[i])
    // s = s+ str[i]  // Abhi 
    s = str[i] + s  // ihbA
}
console.log(s)  // ihbA