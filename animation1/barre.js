var pos = 0, 
    idBarre = 200;



function Move() {
  var barre = document.getElementById("animate");  

  clearInterval(idBarre);

  id = setInterval(frame, 5);

  function frame() {

    if (pos == 50) {
      clearInterval(id);

    } else {

      barre.style.display = 'block';
      pos++; 
      barre.style.right = pos + "px"; 
      barre.style.dow = pos + "px"; 
     
    }
  }




}