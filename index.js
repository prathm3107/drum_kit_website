for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    keyPressed(this.innerHTML);
  });
}


document.addEventListener('keypress', function(event) {
  keyPressed(event.key);
});

function keyPressed(btnClicked) {
  switch (btnClicked) {
    case 'w':
      var audio = new Audio("sounds/tom-1.mp3")
      audio.play();
      flash(btnClicked);
      break;

    case 'a':
      var audio = new Audio("sounds/tom-2.mp3")
      audio.play();
      flash(btnClicked);
      break;

    case 's':
      var audio = new Audio("sounds/tom-3.mp3")
      audio.play();
      flash(btnClicked);
      break;

    case 'd':
      var audio = new Audio("sounds/tom-4.mp3")
      audio.play();
      flash(btnClicked);
      break;

    case 'j':
      var audio = new Audio("sounds/crash.mp3")
      audio.play();
      flash(btnClicked);
      break;

    case 'k':
      var audio = new Audio("sounds/kick-bass.mp3")
      audio.play();
      flash(btnClicked);
      break;

    case 'l':
      var audio = new Audio("sounds/snare.mp3")
      audio.play();
      flash(btnClicked);
      break;
    default:
      break;
  }
}

function flash(btnClicked) {
  document.querySelector("." + btnClicked).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("." + btnClicked).classList.remove("pressed");
  }, 100);
}
