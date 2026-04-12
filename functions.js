// function sum(x,y){
//     let s = x + y ;
//     return s ;

// }

// let val = sum(4,5);
// console.log(sum(6,7));
// console.log(val);





//////////////
// Arrow Function 

// const Mul = (a,b) => {
// console.log(a*b);
// }
// Mul(4,5);



// function vowelsinstring(str) {
// let count = 0;
// for( let i = 0 ; i < str.length ; i++){
//     if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
//         count ++; 
//     }
// }
// console.log(count);
// }
// vowelsinstring("jatin");




const vowelsinstring = (str) => {
let count = 0;
for( let i = 0 ; i < str.length ; i++){
    if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
        count ++; 
    }
}
return count ;
}

console.log(vowelsinstring("hello"));