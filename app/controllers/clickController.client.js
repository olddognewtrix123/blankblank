'use strict';

(function () {

   var cwd = window.location.href;
   var sendDataButton = document.querySelector('.btn-send1');

function updateDB () {
   console.log("Yeow that worked!!!")
}

sendDataButton.addEventListener('click', function () {
   updateDB ();
   // now I want it to post to the db, and when
   // it is done posting to the db to return what
   // it posted to the db
   // problem is I cannot do server side code from here 
   // because this is already doing client side stuff
   // I need to call clickHanlder from here somehow
   window.location.href = cwd + "goToClickHandler";
   
}, false)

})();   
         
