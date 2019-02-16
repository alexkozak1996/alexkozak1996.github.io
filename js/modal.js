var small = document.getElementById("open-small");
var small1 = document.getElementById("open-small1");
var small2 = document.getElementById("open-small2");
var modalSmall = document.getElementById("modal-small");
var overlay = document.getElementById("modal-overlay");
var closeSmall = document.getElementById("modal-small__close");

small.onclick = function(){
    modalSmall.style.display = "block";
    overlay.style.display = "block";
}
small1.onclick = function(){
    modalSmall.style.display = "block";
    overlay.style.display = "block";
}
small2.onclick = function(){
    modalSmall.style.display = "block";
    overlay.style.display = "block";
}
closeSmall.onclick = function(){
    modalSmall.style.display = "none";
    overlay.style.display = "none";
}

var big = document.getElementById("open-big");
var big1 = document.getElementById("open-big1");
var big2 = document.getElementById("open-big2");
var big3 = document.getElementById("open-big3");
var modalBig = document.getElementById("modal-big");
var closeBig = document.getElementById("modal-big__close");

big.onclick = function(){
    modalBig.style.display = "block";
    overlay.style.display = "block";
}
big1.onclick = function(){
    modalBig.style.display = "block";
    overlay.style.display = "block";
}
big2.onclick = function(){
    modalBig.style.display = "block";
    overlay.style.display = "block";
}
big3.onclick = function(){
    modalBig.style.display = "block";
    overlay.style.display = "block";
}
closeBig.onclick = function(){
    modalBig.style.display = "none";
    overlay.style.display = "none";
}