var i;
for (i = 0; i <= 6; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", mouseClick);

}

function mouseClick() {
  press(this.innerHTML);
  buttonAnimation(this.innerHTML);
}

document.addEventListener("keydown", keyPress);

function keyPress() {
  press(event.key);
  buttonAnimation(event.key);
}



function press(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3")
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3")
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3")
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3")
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/kick-bass.mp3")
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/snare.mp3")
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/crash.mp3")
      audio.play();
      break;



  }


}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");

  },50);
}
