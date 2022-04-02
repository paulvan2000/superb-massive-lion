// global constants
const cluePauseTime = 222; //how long to pause in between clues
const nextClueWaitTime = 500; //how long to wait before starting playback of the clue sequence
const minimumClueHoldTime = 333;
const initialClueHoldTime = 666;

//Global Variables
var pattern = [];
var progress = 0;
var allowGuess = false;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.75; //must be between 0.0 and 1.0
var guessCounter = 0;
var selectedLength = 0;
var counterBtn = document.getElementById("endlessCounter");
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var timeLeft;
var mistakesLeft;
var initialMistakes;
var initialGuessTime;

window.addEventListener("mouseup", function (event) {
  stopTone();
});

document.querySelector(".mdl-menu").addEventListener("click", function (event) {
  event.stopPropagation();
});

var guessTimer;

function startGame() {
  //initialize game variables
  if (pattern.length == 0) generateNewPattern(false);
  progress = 0;
  gamePlaying = true;
  initialGuessTime = document.getElementById("clockSelect").value;
  if (initialGuessTime == "Disabled") {
    initialGuessTime = 99999999;
  } else {
    document.getElementById("timerBtn").classList.remove("hidden");
  }
  timeLeft = initialGuessTime;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("newPtnBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  selectedLength = document.getElementById("lengthSelect").value;
  initialMistakes = document.getElementById("mistakeSelect").value;
  mistakesLeft = initialMistakes;
  if (mistakesLeft != 0) {
    document.getElementById("mistakesBtn").classList.remove("hidden");
  }
  document.getElementById("heart1L").classList.add("hidden");
  document.getElementById("heart2L").classList.add("hidden");
  document.getElementById("heart3L").classList.add("hidden");
    document.getElementById("heart1").classList.add("hidden");
  document.getElementById("heart2").classList.add("hidden");
  document.getElementById("heart3").classList.add("hidden");
  for (var i = 1; i <= mistakesLeft; i++) {
    document.getElementById("heart" + i).classList.remove("hidden");
  }
  renderMistakes();
  playClueSequence();
  clearInterval(guessTimer);
  guessTimer = setInterval(function () {
    if (allowGuess) timeLeft--;
    var hours = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;
    if (seconds < 10) seconds = "0" + seconds;
    if (allowGuess)
      document.getElementById("timerBtn").textContent =
        "0" + hours + ":" + seconds;
    if (timeLeft <= 0) {
      clearInterval(guessTimer);
      if (gamePlaying) loseGame();
    }
  }, 1000);
  var element = document.querySelector(".disableMe");
  if (element != null && element != undefined) {
    element.disabled = "disabled";
  }
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("newPtnBtn").classList.remove("hidden");
  document.getElementById("timerBtn").classList.add("hidden");
  document.getElementById("mistakesBtn").classList.add("hidden");
  var element = document.querySelector(".disableMe");
  if (element != null && element != undefined) {
    element.disabled = "";
  }
}

function generateNewPattern(showAlert) {
  pattern = [];
  for (var i = 0; i <= 50; i++) {
    pattern.push(Math.floor(Math.random() * 6) + 1);
  }
  if (showAlert) alert("New color pattern generated!");
}

function guess(btn) {
  if (!gamePlaying || !allowGuess) return;
  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (progress == selectedLength - 1) winGame();
      else {
        progress++;
        timeLeft = initialGuessTime;
        playClueSequence();
      }
    } else {
      guessCounter++;
      timeLeft = initialGuessTime;
    }
  } else {
    mistakesLeft--;
    renderMistakes();
    if (mistakesLeft <= 0) {
      setTimeout(loseGame, 500);
    } else {
      timeLeft = initialGuessTime;
      playClueSequence();
      startTone(7);
    }
  }
}

function loseGame() {
  stopGame();
  startTone(7);
  alert(
    "Game Over. You comepleted " +
      progress +
      "/" +
      selectedLength +
      " sections of the pattern correctly."
  );
  stopTone();
}

function renderMistakes() {
  if (mistakesLeft == 2) {
    if (initialMistakes == 3) {
      document.getElementById("heart3L").classList.remove("hidden");
      document.getElementById("heart3").classList.add("hidden");
      scaleHeart(3);
    }
  } else if (mistakesLeft == 1) {
    if (initialMistakes >= 2) {
      document.getElementById("heart2L").classList.remove("hidden");
      document.getElementById("heart2").classList.add("hidden");
      scaleHeart(2);
    }
  } else if (mistakesLeft <= 0) {
    document.getElementById("heart1L").classList.remove("hidden");
    document.getElementById("heart1").classList.add("hidden");
    scaleHeart(1);
  }
}

function winGame() {
  stopGame();
  alert("You won! You comepleted a pattern of length " + selectedLength + "!");
}

function scaleHeart(id) {
  document.getElementById("heart" + id + "L").classList.add("lit");
  setTimeout(function () {
    document.getElementById("heart" + id + "L").classList.remove("lit");
  }, 222);
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  context.resume();
  let delay = nextClueWaitTime; //set delay to initial wait time
  guessCounter = 0;
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  timeLeft = initialGuessTime;
  if (initialGuessTime >= 10)
    document.getElementById("timerBtn").textContent = "00:" + initialGuessTime;
  else
    document.getElementById("timerBtn").textContent =
      "00:" + "0" + initialGuessTime;
  allowGuess = false;
  setTimeout(function () {
    allowGuess = true;
  }, delay);
  clueHoldTime =
    initialClueHoldTime * (1 - progress / selectedLength) + minimumClueHoldTime;
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 529.6,
  6: 592.6,
  7: 222,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
