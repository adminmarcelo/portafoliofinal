/*js*/
let element=document.querySelector(".modonocturno")
let body= document.body
let navar=document.querySelector("#navuno")
let luna=document.querySelector(".svgg")
let hamburguesa=document.querySelector(".hamburguesa")
let burguer=document.querySelector(".burguer")
let linkinterno=document.querySelector(".linkinterno");

element.addEventListener("click", function()
{ body.classList.toggle("modo-oscuro");
navar.classList.toggle("modo-oscuro");
luna.classList.toggle("svggdos")
burguer.classList.toggle("burguerdos")
linkinterno.classList.toggle("linkinternowhite")
});

//llamamos a .linkinternos


//function hamburguesa
hamburguesa.addEventListener("click",function(){
 linkinterno.classList.toggle("botonhamburguesa");
  // linkinterno.style.display="block";
  // linkinterno.style.position="fixed";
   //linkinterno.style.z-index="2"



})



