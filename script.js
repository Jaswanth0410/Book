// Selecting popup-box popup-overlay and button
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.querySelector(".add-popup-button")

addpopupbutton.addEventListener("click", function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
})
