'use strict';



// events must be placed inside a function , otherwise 
// the scripts will execute before the DOM has been created
// and will be null

(function () {
    
    var goWhoDat = document.querySelector('.btn-clickMe');
    var clickMe = document.querySelector('.btn-clickMe1');
    
     goWhoDat.addEventListener("click", function(){
        document.getElementById("demo").innerHTML = "Hello World!!!";
     }, false);
    
    clickMe.addEventListener("click", function(){
        document.getElementById("demo1").innerHTML = "Hello World";
    }, false);
 
 

 
 
})(); // <-- include the extra set of parens 









   