$(document).ready(function() {
  let name = "Nicolas";
  let greeting = document.getElementById("greeting");
  greeting.innerHTML = "Hi " + name + "!";
  console.log(this);
});