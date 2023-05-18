function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 function guessing_game(){
    window.open("/prohtml/guessing_game/guessing_game.html");
  }

  function myFunction() {
   var x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
     x.className += " responsive";
   } else {
     x.className = "topnav";
   }
 }