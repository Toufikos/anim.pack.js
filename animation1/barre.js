var pos = 0, 
    idBarre = null;
 


function myMove() {
  var elem = document.getElementById("animate");   

  clearInterval(idBarre);

  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {

      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}