(function () {
     
     var cwd = window.location.href;
     // The cwd is https://blankblank-0-olddognewtrix123.c9users.io/
     
     var path = process.cwd();
     
     var myLocation = window.location.href;
     
     var goData = document.querySelector('.btn-goData');
     
      
      
      // clicking this button sends you to the './who' page
      goData.addEventListener("click", function(){
       // console.log("The current url is " + myLocation)
         window.location.href = path + 'public/profile.html';
       //res.sendFile(path + '/public/profile.html');
      }, false);
     
     
  
 })(); 
 