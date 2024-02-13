
// let str = "Ram is dancing"

// print words seprately 
// Ram 
// is 
// dancing

// let arr = str.split(" ") // ["Ram", "is", "dancing"]
// console.log(arr)

// for(let t of arr){
//     console.log(t)
// }

// let s1 = str.replaceAll(" ", "\n") 
// console.log(s1)

// let str = "Ram is dancing"
//  str = str + " "

// word = ""
// for(let t of str){
//   if(t !=" "){
//     word = word + t  //is
//   }
//   else{
//     console.log(word) // Ram is
//     word = ""
//   }
// }



// let s = "hello"
//  s = s+"R"  // helloR


let str = "   Ram   is   dancing   "

// console.log(str1.split(" "))
str = str+ " "

word = ""
for(let t of str){
  if(t !=" "){
    word = word + t  //is
  }
  else if(word!=""){
    console.log(word) // Ram is
    word = ""
  }
}