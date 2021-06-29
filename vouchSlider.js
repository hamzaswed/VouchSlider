var cont = document.getElementsByClassName("container")[0];
var rightBar = document.getElementsByClassName("leftBar")[0];
var leftBar = document.getElementsByClassName("rightBar")[0];
// var middelBar = document.getElementsByClassName("container")[0],

console.log(rightBar)
cont.onscroll = function(){
    rightBar.style.top = (cont.scrollTop/5) + -(80) + "%"
    console.log(cont.scrollTop/2)
}