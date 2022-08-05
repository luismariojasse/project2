 var n = 0
 var nr = 0
 var mo = document.getElementById("p")
 var ko = document.getElementById("musk")
 var ko1 = document.getElementById("po")
 var ko3 = document.getElementById("up")
 var mo1 = document.getElementById("p1")
 var pra = document.getElementById("pra1")
 var gol = document.getElementById("zamo")
 var mos = document.getElementById("luo")
 var gol1 = document.getElementById("zamo1")
 var gol2 = document.getElementById("zamo2")
 var gol3 = document.getElementById("zamo3")
 var gol4 = document.getElementById("zamo4") 
 var gol5 = document.getElementById("zamo5")
 var k = document.getElementById("k")
 var jiy = document.getElementById("pass")
var para = document.getElementById("disp")






 gol1.focus()
 function vamos(){
   var l1 = document.getElementById("oi")
   var l2 = document.getElementById("oi1")
    var l3 = document.getElementById("oi2")
    var l4 = document.getElementById("oi3")
    var l5 = document.getElementById("oi4")
if(l1.checked){
   n++
}
if(l2.checked){
   n++
}
if(l3.checked){
n++
}
if(l4.checked){
   n++
}
if(l5.checked){
n++
}
if (n >= 3){
   mo.innerHTML=`Parabéns você acertou amaioria da perguntas`
   n=0
}
else{
   mo.innerHTML=`OOps você não acertou amaioria das perguntas, recomendamos que faça novamente`
   n=0
}
ko3.style.display="block"
 }
 function h(){
 ko.style.display="block"
  ko1.style.display="none"
 }
 function lop(){
  ko.style.display="none"  
  ko3.style.display="none"
  ko1.style.display="block" 
  k.style.display="none"
  pra.style.display="none"
  n=0
  nr=0

 }
  function vamos1(){
   var tem = document.getElementById("tem")
   var l2 = document.getElementById("tem1")
    var l3 = document.getElementById("tem2")
    var l4 = document.getElementById("tem3")
    var l5 = document.getElementById("tem4") 
    var l6 = document.getElementById("tem5")


if(tem.checked){
   n++
   console.log("lou")
}
if(l2.checked){
   n++
}
if(l3.checked){
n++
}
if(l4.checked){
   n++
}
if(l5.checked){
n++

}
if(l6.checked){
   n++
   }
if (n >= 3){
   mo1.innerHTML=`Parabéns você acertou amaioria das perguntas.`
}
else{
   mo1.innerHTML=`OOps você não acertou amaioria das perguntas, recomendamos que faça novamente`
}
ko3.style.display="block"
 }
 function h1(){
   pra.style.display="block"
    ko1.style.display="none"
   }
function mer(){
   if(gol.value.toUpperCase() == "A"){
   nr ++
}
if( gol1.value.toUpperCase() == "AN"){
   nr++
}
 if(gol2.value.toUpperCase() == "A"){
   nr ++
 }
  if(gol3.value.toUpperCase() == "A"){
   nr ++

  } if(gol4.value.toUpperCase() == "AN"){
   nr ++
  }
   if(gol.value.toUpperCase() == "A"){
   nr ++
   }
   if (nr >= 3){
      mos.innerHTML=`Parabéns você acertou amaioria das perguntas.`
      ko3.style.display="block"
      nr=0
   }else{
      mos.innerHTML=`OOps você não acertou amaioria das perguntas, recomendamos que faça novamente`
      nr=0
      ko3.style.display="block"

   }


}
function h2(){
  k.style.display="block"
    ko1.style.display="none"
   }
  // function get(){
    //  if(jiy.value == "lu*"){
      //    ko1.style.display="block"
      //   para.style.display="none"


    //  }
  
 // }
  

