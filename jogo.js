var poo = document.getElementById("u")
var total = document.getElementById("total")
var todo = document.getElementById("todo")


   function ver(){
    var po = document.getElementById("esc")
    poo.style.display="none"
    po.style.display="block"
    total.style.display="none"
    todo.style.display="todo"
   } 
  
     var pot = 0
     var n1 = document.getElementById("j")   
     var np = document.getElementById("esc1") 
     var np1 = document.getElementById("esc2")
     var np2 = document.getElementById("esc3")
     var np3 = document.getElementById("esc4")


  function li(){
    var n = document.getElementById("oi")
    var n2 = document.getElementById("esc")
    if (n.checked){
      pot ++
      n2.style.display="none"
      np.style.display="block"
      n1.innerHTML=pot
    }
     
    n2.style.display="none"
    np.style.display="block"
  }
 
  function li1(){
    var n = document.getElementById("oi1")
    var n2 = document.getElementById("esc1")
    if (n.checked){
      pot ++
      n2.style.display="none"
      np1.style.display="block"
      n1.innerHTML=pot
    }
    n2.style.display="none"
    np1.style.display="block"
  } 
  function li2(){
    var n = document.getElementById("oi2")
    var n2 = document.getElementById("esc2")
    if (n.checked){
      pot ++
      n2.style.display="none"
      np2.style.display="block"
      n1.innerHTML=pot
    }
    n2.style.display="none"
    np2.style.display="block"
    
  }
  function li3(){
    var n = document.getElementById("oi3")
    var n2 = document.getElementById("esc3")
    if (n.checked){
      pot ++
      n2.style.display="none"
      np3.style.display="block"
      n1.innerHTML=pot
    }
    n2.style.display="none"
    np3.style.display="block"

  }

  function li4(){
    var fi = document.getElementById("fi")
    var repi = document.getElementById("repi")
    var n = document.getElementById("oi4")
    var n2 = document.getElementById("esc4")
    if (n.checked){
      pot ++
      n2.style.display="none"
    }
    n2.style.display="none"
    if (pot >= 3){
    n1.innerHTML=`<strong><p class="lp" id="par">Parabéns você acertou ${pot}/5 </p><strong>`
     fi.style.display="block"
     pot=0
    }
    else{
      n1.innerHTML=`<p class="k" id="mou">oops você não conseguiu antigir a meta,
       recomendamos que repita o exercício</p>`
       repi.style.display="block"
       pot=0
    } 
  }
  function repita(){
    var po = document.getElementById("esc")
    po.style.display="block" 
    var po1 = document.getElementById("mou") 
   var poo = document.getElementById("repi")
    po1.style.display="none"
    poo.style.display="none"
  }
  var poo = document.getElementById("u")


  function fi(){
   var fi = document.getElementById("fi")
    total.style.display="block"
    poo.style.display="block"
    n1.innerHTML=""
    fi.style.display="none"
  }
   function po1(){
    var poco = document.getElementById("esco")
    poo.style.display="none"
    poco.style.display="block"
   } 

   var pot = 0
   var n1 = document.getElementById("j")   
   var m = document.getElementById("esco1") 
   var m1 = document.getElementById("esco2")
   var m2 = document.getElementById("esco3")
   var m3 = document.getElementById("esco4")


   function la(){
    var n = document.getElementById("okk")
    var n2 = document.getElementById("esco")
    if (n.checked){
      pot ++
      n2.style.display="none"
      m.style.display="block"
      n1.innerHTML=pot
    } 
     n2.style.display="none"
    m.style.display="block"  
  } 
  function la1(){
    var n = document.getElementById("okk1")
    var n2 = document.getElementById("esco1")
    if (n.checked){
      pot ++
      n2.style.display="none"
      m1.style.display="block"
      n1.innerHTML=pot
    } 
     n2.style.display="none"
    m1.style.display="block"  
  }
  function la2(){
    var n = document.getElementById("okk2")
    var n2 = document.getElementById("esco2")
    if (n.checked){
      pot ++
      n2.style.display="none"
      m2.style.display="block"
      n1.innerHTML=pot
    } 
     n2.style.display="none"
    m2.style.display="block"  
  }
  function la3(){
    var n = document.getElementById("okk3")
    var n2 = document.getElementById("esco3")
    if (n.checked){
      pot ++
      n2.style.display="none"
      m3.style.display="block"
      n1.innerHTML=pot
    } 
     n2.style.display="none"
    m3.style.display="block"  
  }


  function la4(){
    var fi1 = document.getElementById("fi")
    var repi1 = document.getElementById("repi1")
    var n = document.getElementById("okk4")
    var n2 = document.getElementById("esco4")
    if (n.checked){
      pot ++
      n2.style.display="none"
    }
    n2.style.display="none"
    if (pot >= 3){
    n1.innerHTML=`<strong><p class="lp" id="par">Parabéns você acertou ${pot}/5 </p><strong>`
     fi1.style.display="block"
     pot=0
    }
    else{
      n1.innerHTML=`<p class="k" id="mou">oops você não conseguiu antigir a meta,
       recomendamos que repita o exercício</p>`
       repi1.style.display="block"
       pot=0
    } 
  }
  function fi1(){
   var fi1 = document.getElementById("fo")
   total.style.display="block"
    n1.innerHTML=""
    fi1.style.display="none"
  }


  function repita1(){
    var po = document.getElementById("esco")
    po.style.display="block" 
    var po1 = document.getElementById("mou") 
   var poo = document.getElementById("repi1")
    po1.style.display="none"
    poo.style.display="none"
  }
  var jiy = document.getElementById("pass")
  var jay = document.getElementById("dt")




  function get(){
    if(jiy.value == "lu*"){
        poo.style.display="block"
       jay.style.display="none"
    }

}


