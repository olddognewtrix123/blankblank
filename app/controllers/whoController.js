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
        
        //window.location.href = apiUrl;
        
        apiUrl;

        // what I want to do at this point is fire some server-side code that
        //updates the mongo db
        // the problem is I cannot fire serverside code from this page - this is 
        //still client side
        // so I need to put the server side code in clickHander and call the 
        // clickHandler function from index.js, which is server side
        // then I need to connect to that route in index.js from here
    }, false);

    
 
})(); // <-- include the extra set of parens 









   