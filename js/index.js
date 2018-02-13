var choke = document.getElementById("brody-choke");
var chokeSound = document.querySelector("audio[data-key=\"choking\"]");

var eating = document.getElementById("brody-eating");
var eatingSound = document.querySelector("audio[data-key=\"eating\"]");

choke.addEventListener("click", function (event) {
  chokeSound.play();
}, false);

eating.addEventListener("click", function (event) {
  eatingSound.play();
}, false);