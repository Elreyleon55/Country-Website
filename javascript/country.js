"use strict"

const navButton = document.getElementById("main-navigation-button");
const navlist = document.getElementById("main-navigation-list");

navButton.addEventListener("click", () => {
    navlist.classList.toggle("toggled");
})


// credits page to change the via contact and contact

const viaContact = document.querySelectorAll(".choose-via-contact input")

//output
let outPutMessage = document.querySelector(".email-output");
let outPutPlaceHolder = document.querySelector(".email-placeholder");

outPutMessage.innerHTML = '';
outPutPlaceHolder.placeholder = ''

console.log(viaContact)
console.log(outPutMessage);
console.log(outPutPlaceHolder);


viaContact.forEach(function(action){
    action.addEventListener("click", function(){
        outPutMessage.innerHTML = 'Email'
        outPutPlaceHolder.placeholder = 'Enter you Email here'
    })
    
    
    
})

// ^^^figure outlater