var ko = document.getElementById("main")
var ko1 = document.getElementById("np")
var aula = document.getElementById("main1")
var aula1 = document.getElementById("np1")
var joy = document.getElementById("pass")
var co = document.getElementById("fd")




function most(){
ko.style.display="block"
ko1.style.display="none"
aula.style.display="none" 
aula1.style.display="none"



}
function hid(){
   ko.style.display="none" 
   ko1.style.display="block"  
   aula1.style.display="block"
   aula.style.display="none" 

}
function most1(){
   aula.style.display="block" 
   aula1.style.display="none"
   ko.style.display="none"
   ko1.style.display="none"

}
function get(){
   if(joy.value == "lu*"){
       ko1.style.display="block"
       co.style.display="none"

   }

}



