
const submit_button = document.getElementById("submit-btn");

submit_button.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("submit-btn").innerHTML = "Hello World";
}