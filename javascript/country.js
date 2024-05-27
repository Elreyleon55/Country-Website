"use strict"

const navButton = document.getElementById("main-navigation-button");
const navlist = document.getElementById("main-navigation-list");

navButton.addEventListener("click", () => {
    navlist.classList.toggle("toggled");
})

// to hide until it is chossen 
const contactForm = document.querySelector(".open-form");


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


contactForm.style.display = 'none';

viaContact.forEach(function(action){
    action.addEventListener("click", function(){
        //display contact form
        contactForm.style.display = 'block'
        //depends what they choose
        let contact = action.value;
        console.log(contact);
        outPutMessage.innerHTML = `${contact}`;
        outPutPlaceHolder.placeholder = `Enter your ${contact} here`
        return console.log(contact);
    })
    
})

