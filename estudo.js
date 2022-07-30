var jay = document.getElementById("golpe")
var joy = document.getElementById("pou")
 var jiy = document.getElementById("pass")
 var jay1 = document.getElementById("disp")


function power(){
    jay.style.display="block"
    joy.style.display="none"
}
function final(){
    jay.style.display="none"
    joy.style.display="block"
}
function get(){
    if(jiy.value == "lu*"){
        joy.style.display="block"
       jay1.style.display="none"
    }

}
