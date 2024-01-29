localStorage.setItem("numberOfClicks", 0);
localStorage.setItem("numberOfTries", 0);
let buttonClass = "clickme";
const button = document.getElementById("main");
button.addEventListener("mouseover", function () {
  localStorage.setItem("numberOfTries", parseInt(localStorage.getItem("numberOfTries"))+1)
  randomPlaceDiv();
  if (parseInt(localStorage.getItem("numberOfTries")) === 6) {
    document.getElementById("main").innnerHTML=
   "You will know that you clicked me when an alert appears";
  }
  if (parseInt(localStorage.getItem("numberOfTries")) === 7) {
    document.getElementById("main").innnerHTML=
   "Click Me";
  }
  switchClass();
});
button.addEventListener("click", function () {
  localStorage.setItem("numberOfClicks", parseInt(localStorage.getItem("numberOfClicks")) + 1);
  alert("You finally got it after " + localStorage.getItem("numberOfTries") + " more tries! That's click number " + localStorage.getItem("numberOfClicks"));
  localStorage.setItem("numberOfTries", parseInt(localStorage.getItem("numberOfTries")) + 1);
});

function randomPlaceDiv() {
  let x_pos = Math.random()*(window.innerWidth-130);
  let y_pos = Math.random()*(window.innerHeight-70);
  var d = document.querySelector('.buttondiv');
  d.style.position = "absolute";
  d.style.left = x_pos+'px';
  d.style.top = y_pos+'px';
}
function switchClass() {
  if (buttonClass === "clickme") {
    buttonClass = "hovered";
    let element = document.querySelector(".clickme");
    element.classList.remove("clickme");
    element.classList.add("hovered");
  }
  else {
    buttonClass = "clickme";
    let element = document.querySelector(".hovered");
    element.classList.remove("hovered");
    element.classList.add("clickme");
  }
}