var main = document.querySelector("body")
var box1 = document.querySelector("#box1")
var box2 = document.querySelector("#box2")
var box3 = document.querySelector("#box3")
var box4 = document.querySelector("#box4")

box1.addEventListener("click",function(){
    main.style.backgroundColor = "rgb(0, 242, 255)";
})

box2.addEventListener("click",function(){
    main.style.backgroundColor = "rgb(255, 0, 174)";
})

box3.addEventListener("click",function(){
    main.style.backgroundColor = "rgb(0, 255, 17)";
})

box4.addEventListener("click",function(){
    main.style.backgroundColor = "rgb(242, 255, 0)";
})