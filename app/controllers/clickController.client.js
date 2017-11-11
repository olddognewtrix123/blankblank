'use strict';

(function () {

   var sendDataButton = document.querySelector('.btn-send1');

function updateClickCount () {
   console.log("Yeow that worked!!!")
}

sendDataButton.addEventListener('click', function () {
   updateClickCount ();
}, false)

})();   
         

 //  function updateClickCount (data) {
 //     var clicksObject = JSON.parse(data);
//      clickNbr.innerHTML = clicksObject.clicks;
//   }

   //ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', updateClickCount));
   
   

  // addButton.addEventListener('click', function () {

  //    ajaxFunctions.ajaxRequest('POST', function () {
  //       ajaxFunctions.ajaxRequest('GET', updateClickCount);
  //    });

  // }, false);

 //  deleteButton.addEventListener('click', function () {

  //    ajaxFunctions.ajaxRequest('DELETE', function () {
  //       ajaxFunctions.ajaxRequest('GET', updateClickCount);
  //    });

  /// }, false);

//})();