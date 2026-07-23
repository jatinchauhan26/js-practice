// alert ("hello brother")
// prompt (" write")




// document.body.style.background = "green";

// // let heading = document.getElementById("heading");
// // console.dir(heading);


// // let headings = document.getElementsByClassName("heading");
// // console.dir(headings);

// // let parahs = document.getElementsByTagName("p");
// // console.dir(parahs);


// let hello = document.querySelector("p");
// // let hello = document.querySelectorAll("p");
// // let hello = document.querySelector("#myid");
// // let hello = document.querySelectorAll(".heading");

// console.dir(hello);




// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h1");
// console.dir(heading);



// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

//  h2.innerText = h2.innerText + " from badmosh gang"; // concatenation


// let divs = document.querySelectorAll(".box");
// console.log(divs[0]);
// console.log(divs[1]);
// console.log(divs[2]);
// divs[0].innerText = "new unique value 1"

// let divs = document.querySelectorAll(".box");
// idx = 0;
// for(div of divs) {
// div.innerText  = `new unique value ${idx}` ;
// idx++;
// }




//DOM ATTRIBUTES 

// let div = document.querySelector("#box");
// console.log(div);



// TO GET THE ATTRIBUTE  :  

// let p = document.querySelector(".para");

// let name = p.getAttribute("name");
// console.log(name)

// TO SET THE ATTRIBUTE

//  let para = document.querySelector(".para");
//  console.log(para.setAttribute("class","newClass"));




//STYLE

// let div = document.querySelector("#box")
// div.style.backgroundColor = "green";
// div.style.fontSize = "26px"
// div.style.height = "1000px";



//TO CREATE THE ELEMENT 


// let div = document.querySelector("#box")
// let newBtn = document.createElement("button");

// newBtn.innerText = "click me!" ;
// console.log(newBtn);
 

//TO ADD THE NEW ELEMENT
// div.append(newBtn);                div mai sbse niche
// div.prepend(newBtn);               div mai sbse uper
// div.before(newBtn);                div se phle
// div.after(newBtn);                 div ke baad


// let p = document.querySelector("p")
// p.after(newBtn);


//  let newHeading = document.createElement("h1");
//  newHeading.innerHTML = "<i> I am new </i>";

//  document.querySelector("body").prepend(newHeading);
//  console.log(newHeading)

//TO DELETE THE ELEMENT 

// let para = document.querySelector("p");
// para.remove();