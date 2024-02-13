// indexOf and lastIndexOf

let str = "Nikihil"

// console.log(str.indexOf("i",4))  // last parameter means starting index

// console.log(str.lastIndexOf("i", 6))  // 5 // last parameter means  ending index


// index of: 
// take a string and print its vowels 




// let str1 = "Abhishek"

// let v = "aeiouAEIOU"

// for(let t of str1){// A,b,h,i,s,h,e,k
//     // t = "A" 
//     if(v.indexOf(t)>=0){
//         console.log(t)
//     }
// }







// for(let t of str1){
//     if(t=="a" || t == "A" ||
//     t=="e" || t == "E" ||
//     t=="i" || t == "I" ||
//     t=="o" || t == "O" ||
//     t=="u" || t == "U" ){
//         console.log(t)
//     }
    
// }



let str2 = "DOMDAMDOMDAM" // remove duplicate charcaters

let collection = "" 


for(let t of str2){
    if(collection.indexOf(t)==-1){ //DOMA
      collection = collection + t
    }
}

console.log(collection)
 
// let s = "Abhi"
// console.log(s.indexOf("h"))