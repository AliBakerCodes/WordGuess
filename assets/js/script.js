//document objects
var guessEl = document.querySelector("#guess");
var messageEl = document.querySelector("#message");
var winsEl = document.querySelector("#wins");
var lossesEl = document.querySelector("#losses");
var startEl = document.querySelector("#start");
var timerEl = document.querySelector("#timer");
var timeInterval;
var timer = 0;
var game = {};

function randNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function chooseWord(dictionary) {
  var pick = dictionary[randNum(0, dictionary.length - 1)];
  return pick;
}

function displayMessage(win) {
  if (win) {
    messageEl.textContent = "You Won!";
  } else {
    messageEl.textContent = "You Lost!";
  }
}

function winOrLoss(win) {
  if (win) {
    clearInterval(timeInterval);
    displayMessage(true);
    game["wins"]++;
    storeGame();
    getGame();
  } else {
    displayMessage(false);
    game["losses"]++;
    storeGame();
    getGame();
  }
}

function renderGuess(word) {
  guessEl.innerHTML = "";
  for (var i = 0; i < word.length; i++) {
    var li = document.createElement("li");
    li.textContent = "_";
    li.setAttribute("data-solved", false);
    guessEl.appendChild(li);
  }
}

function checkGuess(word, letter) {
  console.log(word);
  console.log(letter);
  var solveTest = 0;
  for (i = 0; i < word.length; i++) {
    var guessLi = guessEl.childNodes.item(i);
    if (word[i].includes(letter)) {
      console.log("match");
      console.log(word[i]);
      console.log(guessEl.childNodes.item(i).nodeName);
      guessLi.innerHTML = word[i];
      guessLi.dataset.solved = "true";
    }
  }
  for (i = 0; i < word.length; i++) {
    if (guessLi.getAttribute("data-solved") == "true") {
      solveTest++;
      console.log(solveTest);
    }
  }
  if (solveTest == word.length) {
    console.log("WIN!");
    winOrLoss(true);
  }
}

function renderGame() {
    messageEl.textContent = "";
  game["currentWord"] = chooseWord(game.dictionary).split("");
  console.log(game.currentWord)
  renderGuess(game["currentWord"]);
  countdown();
}

function storeGame() {
  localStorage.setItem("game", JSON.stringify(game));
}

function getGame() {
  var storedGame = JSON.parse(localStorage.getItem("game"));
  if (storedGame) {
    console.log(game.value)
    console.log(true)
    game = storedGame;
  } else {
    console.log(false)
    game["dictionary"] = [
      "snake",
      "light",
      "tree",
      "lips",
      "apple",
      "slide",
      "socks",
      "smile",
      "swing",
      "coat",
      "shoe",
      "water",
      "heart",
      "hat",
      "ocean",
      "kite",
      "dog",
      "mouth",
      "milk",
      "duck",
      "eyes",
      "skateboard",
      "bird",
      "boy",
    ];
    game["wins"] = 0;
    game["losses"] = 0;
    game["playTime"] = 0;
    game["currentWord"] = [];
  }
  console.log(game);
  storeGame();
  winsEl.textContent = game.wins;
  lossesEl.textContent = game.losses;
}

function init() {
  getGame();
}

function countdown() {
  var timeLeft = 10;
    timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      timerEl.textContent = "";
      clearInterval(timeInterval);
      winOrLoss(false);
    }
  }, 1000);
}

//event listeners
startEl.addEventListener("click", function (event) {
  event.preventDefault();
  renderGame();
});

document.addEventListener("keydown", (event) => {
  // Access value of pressed key with key property
  var key = event.key.toLowerCase();
  console.log(key);
  var alphachar = "abcdefghijklmnopqrstuvwxyz".split("");
  if (alphachar.includes(key)) {
    checkGuess(game.currentWord, key);
  }
});

init();
