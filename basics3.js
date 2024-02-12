// strings are immutable 
// type conversion of strings 
// replace and replace All functions of string 

// let str = "PaPA"
// str[0] = "K"  // strings are immutable
// str = "ramesh"
// console.log(str)  

// let str = "PAPA" 

// console.log(str.replace("P","K"))
// console.log(str.replaceAll("P","K"))

// console.log(str)

// let s2 = "" // KAKA
// let c =0 
// for(let t of str){ // P
//   if(t == "P" && c == 0){
//     s2 = s2+"K" //
//     c++ 
//   }
//   else{
//     s2 = s2+t
//   }
// }


// let str = "123" 
// console.log(Number(str)) // 123 
// console.log(+str) // 123

// let n = 123  
// console.log(String(n)) // "123" 
// console.log(n.toString())


let str = "PAPA"

str = str.replace("P" , "K")

console.log(str)