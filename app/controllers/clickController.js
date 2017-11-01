'use strict';



// events must be placed inside a function , otherwise 
// the scripts will execute before the DOM has been created
// and will be null

(function () {
    var clickMe = document.querySelector('.btn-clickMe1');
 clickMe.addEventListener("click", function(){
     var clickMe = document.getElementById("clickMe1");
    console.log(clickMe.id.toString());
    document.getElementById("demo1").innerHTML = "Hello World";
 });
})(); // <-- include the extra set of parens 









   