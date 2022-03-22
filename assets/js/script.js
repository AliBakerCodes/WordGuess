//document objects
var guessEl = document.querySelector("#word");
var messageEl = document.querySelector("#message");
var winsEl = document.querySelector("#wins");
var lossesEl = document.querySelector("#losses");
var startEl = document.querySelector("#start");
var timer = 0;
var game={};

function randNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function chooseWord(dictionary){
    var pick = dictionary[randNum(0,dictionary.length-1)];
    return pick;
};

function renderGuess (word){
    guessEl.innerHTML=""
    for (var i = 0; i < word.length; i++) {
        var li = document.createElement("li");
        li.textContent = "_";
        li.setAttribute("data-index", i);
        guessEl.appendChild(li);
      }
}

function checkGuess(word,letter) {
    for (i=0; i<word; i++) {
        if(word[i].includes(letter)) {
           document
        }
    }
}

function renderGame () {
    game["currentWord"] = chooseWord(game.dictionary).split("");
    winsEl.textContent=game.wins;
    lossesEl.textContent=game.losses;
    renderGuess(word);

    
};

function storeGame () {
    localStorage.setItem("game", JSON.stringify(game));
}

// function getGame () {
//     if (game !== null) {
//         game = storedTodos;
//       }
    
// }

function init () {
    var storedGame = JSON.parse(localStorage.getItem("game"));

    if (storedGame !== null) {
        game = storedGame;
      } else {
        game ={
            dictionary: ["snake","light","tree","lips","apple","slide","socks","smile","swing","coat","shoe","water","heart","hat","ocean","kite","dog","mouth","milk","duck","eyes","skateboard","bird","boy"],
            wins: 0,
            losses:0,
            playTime: 0,
            currentWord:[],
        };
      }
      
}

//event listeners
startEl.addEventListener("click", function(event) {
    event.preventDefault();
    renderGame()
    }
);

guessEl.addEventListener('keydown', function (event) {
    // Access value of pressed key with key property
    var key = event.key.toLowerCase();
    var alphachar = 'abcdefghijklmnopqrstuvwxyz'.split(
      ''
    );
    if (alphachar.includes(key)) {
      checkGuess(game.currentWord,event.key);
      }
});
