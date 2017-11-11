'use strict';



// events must be placed inside a function , otherwise 
// the scripts will execute before the DOM has been created
// and will be null

(function () {
    
    var appUrl = window.location.origin;
    var cwd = window.location.href;
    var apiUrl = cwd + '/writeToDB';
    
    var clickMe = document.querySelector('.btn-clickMe1');
    
    clickMe.addEventListener("click", function(){
        document.getElementById("demo1").innerHTML = "the app url is " + appUrl;

    }, false);

})(); // <-- include the extra set of parens 









   