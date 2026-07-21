console.log("hello revision world")
let age = 13 ;
if(age>=15) {
    console.log("adult");
}
else {
    console.log("minor");
}

let n = 3 ; 
for( let a = 0 ; a < n ; a++){
    console.log(".")
}


let name = " Jatin chauhan ";
// let age = 5 ;
let isStudent = true ;

console.log(name);
console.log(age);
console.log(isStudent);
console.log(` MY name is ${name} `);  // template literal
console.log("my name is ", name);     // , method
console.log("my name is " + name);    // + method




/////// (&& -  both true)  ( || - one true it becomes true )    






let marks = 50;

if(marks >= 90 ) {
    console.log("A");
}
else if(marks >= 75 && marks <= 89){
    console.log("B")
}
else if(marks >= 50 && marks <= 74){
    console.log("C")
}
else {
    console.log("fail");
}




let isWeekend = false;
 let isHoliday = true;
 

 if(isWeekend || isHoliday){
    console.log("Enjoy your day off!")
 }
 else {
    console.log("Go to work");
 }



 

 // To connect css file from html :--   shift + ! then in head write <link rel = "stylesheet" href = "hello.css">
                                        // AND for js write in body at last -- <script src = "hello.js"> </script.js> 
                                                                           




//window object = The window object is a open window in a browser
                //   It is browser object not javascript
                // it is automatically created by browser
                // global object with klots of methods and properties
            



// DOM : when a web page is loaded the browser creates a document object model of page
        //  html ko javascript ke andar access krne ka tarika hai  
// console.dir :: print properties and methods




//DOM MANIPULATION 

// Selecting with id 
// document.getElementById("idname");

// Selecting with class
// document.getElementByClassName("classname");

// Selecting with tag name 
//document.getElementByTagName("p");




// coforge
// quallro    --- for hirhng check




///Properties 


// tagName - returns tag for element nodes
// innerText - returns the text content of the element and all its children 
// innerHTML - returns the plain text or HTML contents in the element 
// textContent - returns textual content even for hidden element 