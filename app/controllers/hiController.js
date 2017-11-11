'use strict';


(function () {
    
    var cwd = window.location.href;
    
    
    var goWho = document.querySelector('.btn-clickMe');
    var goToWho = document.querySelector('.btn-goToWho');

    
     goWho.addEventListener("click", function(){
        document.getElementById("demo").innerHTML = "Who?";
     }, false);
     
     
     // clicking this button sends you to the './who' page
     goToWho.addEventListener("click", function(){
        document.getElementById("demo").innerHTML = "Cindy Lu Who, that's who.";
        window.location.href = cwd + "who";
     }, false);
    
    
 
})(); 





