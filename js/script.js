window.onload = function() {
  let form = document.querySelector("form)")
  form.onsubmit = function(event) {
  event.preventDefault();

  

  if (age >= 45 && height >= 72) {
    document.getElementById("Shrek").removeAttribute("class")
  } 
  else if (height <= 71 && num >= 25) {
    document.getElementById("Linda").removeAttribute("class")
  } 
  else if (height <= 60 && age <= 44 || num <= 24) {
    document.getElementById("DrEvil").removeAttribute("class")
  } 
  else { document.getElementById("sorry").removeAttribute("class") 

  }
  }
}