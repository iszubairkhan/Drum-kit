// 1. Detect Screen Button Clicks
var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonLetter = this.innerHTML; 
    makeSound(buttonLetter);
    buttonAnimation(buttonLetter);
  });
}

// 2. Detect Keyboard Presses (This fixes the keyboard issue!)
document.addEventListener("keydown", function(event) {
  // event.key gives us the lower-case letter of the pressed key
  makeSound(event.key.toLowerCase());
  buttonAnimation(event.key.toLowerCase());
});

// 3. Play Sound Based on the Key
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3"); // Changed from .png to .mp3
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3"); // This one was already working!
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log("Key not mapped: " + key);
  }
}

// 4. Add Flash Animation when pressed
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
















// ==========================================
// AUTOMATION SCRIPT (Add to the bottom of index.js)
// ==========================================

// ==========================================
// ADVANCED 8-STEP LONG BEAT
// ==========================================

var beatIntervalId = null; 
var isPlayingBeat = false; 
var beatStep = 0; // Tracks 8 steps now (0 to 7)

function playAutomaticBeat() {
  switch (beatStep) {
    case 0:
      makeSound("l"); // Kick
      buttonAnimation("l");
      break;
    case 1:
      makeSound("w"); // Hi-Hat / Tom accent to bridge the gap
      buttonAnimation("w");
      break;
    case 2:
      makeSound("j"); // Snare
      buttonAnimation("j");
      break;
    case 3:
      makeSound("l"); // Quick Kick
      buttonAnimation("l");
      break;
    case 4:
      makeSound("l"); // Double Kick impact!
      buttonAnimation("l");
      break;
    case 5:
      makeSound("w"); // Subtle bridge transition
      buttonAnimation("w");
      break;
    case 6:
      makeSound("j"); // Final Snare smash
      buttonAnimation("j");
      break;
    case 7:
      makeSound("s"); // Low floor-tom finish before it loops
      buttonAnimation("s");
      break;
  }

  // Move through steps 0 to 7, then reset to 0
  beatStep = (beatStep + 1) % 8;
}

// Global toggle function
window.toggleBeat = function(bpm) {
  // Since it's an 8-step groove, an eighth-note feel sounds best around 150-180ms per step
  var speed = bpm ? (60000 / bpm) / 2 : 160; 

  if (isPlayingBeat) {
    clearInterval(beatIntervalId);
    isPlayingBeat = false;
    beatStep = 0;
    console.log("Groove stopped.");
  } else {
    isPlayingBeat = true;
    
    // Crash cymbal impact right when you turn it on!
    makeSound("k");
    buttonAnimation("k");
    
    beatIntervalId = setInterval(playAutomaticBeat, speed);
    console.log("Advanced long beat online! Type toggleBeat() to stop.");
  }
};






switch (beatStep) {
    case 0:
      makeSound("l"); // Heavy Kick
      buttonAnimation("l");
      break;
    case 1:
      makeSound("w"); // Hi-Hat tic
      buttonAnimation("w");
      break;
    case 2:
      makeSound("j"); // Sharp Snare
      buttonAnimation("j");
      break;
    case 3:
      // Rest step for a clean syncopated pause
      break;
    case 4:
      makeSound("l"); // Offbeat Kick
      buttonAnimation("l");
      break;
    case 5:
      makeSound("l"); // Double Kick punch
      buttonAnimation("l");
      break;
    case 6:
      makeSound("j"); // Snare snap
      buttonAnimation("j");
      break;
    case 7:
      makeSound("w"); // Final Hi-Hat trail
      buttonAnimation("w");
      break;
  }








  switch (beatStep) {
    case 0:
      makeSound("l"); // Main Kick
      buttonAnimation("l");
      break;
    case 1:
      makeSound("w"); // Fast Hat
      buttonAnimation("w");
      break;
    case 2:
      makeSound("l"); // Second Kick
      buttonAnimation("l");
      break;
    case 3:
      makeSound("j"); // Mid-bar Snare hit
      buttonAnimation("j");
      break;
    case 4:
      makeSound("l"); // Third Kick
      buttonAnimation("l");
      break;
    case 5:
      makeSound("a"); // Tom roll starts
      buttonAnimation("a");
      break;
    case 6:
      makeSound("s"); // Tom roll continues
      buttonAnimation("s");
      break;
    case 7:
      makeSound("j"); // Rapid Snare climax
      buttonAnimation("j");
      break;
  }




  switch (beatStep) {
    case 0:
      makeSound("l"); // Kick entry
      buttonAnimation("l");
      break;
    case 1:
      makeSound("w"); // High Tom accent
      buttonAnimation("w");
      break;
    case 2:
      makeSound("a"); // Mid Tom transition
      buttonAnimation("a");
      break;
    case 3:
      makeSound("j"); // Sharp Snare slap
      buttonAnimation("j");
      break;
    case 4:
      makeSound("l"); // Mid-beat Kick reset
      buttonAnimation("l");
      break;
    case 5:
      makeSound("s"); // Low Tom boom
      buttonAnimation("s");
      break;
    case 6:
      makeSound("d"); // Deepest Floor Tom punch
      buttonAnimation("d");
      break;
    case 7:
      makeSound("j"); // Heavy Snare conclusion
      buttonAnimation("j");
      break;
  }


  switch (beatStep) {
    case 0:
      // Kick AND Crash together for a massive opening wall of sound!
      makeSound("l"); 
      makeSound("k");
      buttonAnimation("l");
      buttonAnimation("k");
      break;
    case 1:
      makeSound("w"); // Rapid High Tom accent
      buttonAnimation("w");
      break;
    case 2:
      // Kick and Mid-Tom layered together for deep bass weight
      makeSound("l");
      makeSound("a");
      buttonAnimation("l");
      buttonAnimation("a");
      break;
    case 3:
      makeSound("j"); // Sharp Snare slap cuts through
      buttonAnimation("j");
      break;
    case 4:
      // Kick and Low-Tom stacked together
      makeSound("l");
      makeSound("s");
      buttonAnimation("l");
      buttonAnimation("s");
      break;
    case 5:
      makeSound("d"); // Deep Floor Tom boom
      buttonAnimation("d");
      break;
    case 6:
      // Double Snare explosion to build peak energy
      makeSound("j");
      buttonAnimation("j");
      break;
    case 7:
      makeSound("j");
      buttonAnimation("j");
      break;
  }