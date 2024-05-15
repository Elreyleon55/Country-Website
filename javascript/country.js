"use strict"

const navButton = document.getElementById("main-navigation-button");
const navlist = document.getElementById("main-navigation-list");

navButton.addEventListener("click", () => {
    navlist.classList.toggle("toggled");
})


