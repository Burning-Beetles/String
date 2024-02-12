// ASCII CODES 


// A-Z => 65-90 
// a-z => 97-122 
// "0" - "9" => 48-57

let s = "Ab" 
console.log(s.charCodeAt(1))  // 65

// ramKumarChoudhary // camel Case

let n = 87 
console.log(String.fromCharCode(n))  // A


let ch ="A" // convert it into opposite case

// let intVal = ch.charCodeAt(0) 

// if(intVal>=65 && intVal<=90){
//     intVal = intVal+32
// }
// else{
//     intVal = intVal-32
// }

// console.log(String.fromCharCode(intVal))  // a

// toUpperCase 
// toLowerCase

// console.log("Abhishek".toUpperCase())  // ABHISHEK
// console.log("Abhishek".toLowerCase())  // abhishek

if(ch>="A" && ch<="Z"){
    console.log(ch.toLowerCase())
}
else if(ch>="a" && ch<="z"){
    console.log(ch.toUpperCase())
}
else{
    console.log(ch)
}