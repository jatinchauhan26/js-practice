// let marks = [1,2,34,5,6,4];
//  marks[1] = 4;
// console.log(marks)

// let heroes = ["jatinbhai","jatindon","jatinbadmosh","dangerjatin"]
// // for(let i=0 ; i< heroes.length ; i++){
// //     for(let j = 0 ; j< heroes.length ;j++)
// // console.log(heroes[j]);
// // }



// for (let i = 0; i < heroes.length; i++) {
//     let word = heroes[i];

//     for (let j = 0; j < word.length; j++) {
//         console.log(word[j]);   // prints each character
//     }
// }



// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for(let i = 0 ; i<marks.length ;i++){
//     sum += marks[i] ;

// }
// let  average_sum  = sum / marks.length;
// console.log(average_sum);

 

// Question ::: 
//For a given array with prices of 5 items.
// All items have an offer of 10% OFF on them . Change the array to store final price agter applying offer.

let items = [250,645,300,900,50];
// let i = 0;
// for(let val of items){
//     let discount = (val*10)/100;
//     items[i] = val - discount;
//     i++
// }




for(let i = 0 ; i< items.length ; i++){
    let discount = (items[i]*10)/100;
    items[i] -= discount ; 
console.log("now the item after discount are :" , items[i]);
}






////////////////////////ARRAY OPERATIONS :


let food = ["potato","litchi","banana","pineapple"];
let drink = ["coca","limca","sting","tea"];

///FOR END---
// food.push("chips","burger");      ----------PUSH()
// food.pop();                       ----------POP()

///FOR START
// food.unshift("chips","burger");       ----------UNSHIFT()
// food.shift();                        ------------SHIFT()


// console.log(food.toString());     --------- toString()
// let final = food.concat(drink);   ----------concat()

// console.log(food.slice(1,3))      ----------slice(start,end)
// console.log(food.slice(1));


// food.splice(1,2,"chiku","guava");
console.log(food);

// console.log(final);
// console.log(food)