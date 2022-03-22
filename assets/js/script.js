//document objects
var guessEl = document.querySelector("#word");
var messageEl = document.querySelector("#message");
var winsEl = document.querySelector("#wins");
var lossesEl = document.querySelector("#losses");
var startEl = document.querySelector("#start");
var timer = 0;
var game ={
    dictionary: ["snake","light","tree","lips","apple","slide","socks","smile","swing","coat","shoe","water","heart","hat","ocean","kite","dog","mouth","milk","duck","eyes","skateboard","bird","boy"],
    wins: 0,
    losses:0,
    playTime: 0,
};

function chooseWord(dictionary){
    
}

function renderGuess (word){

};

function renderGame () {

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

    if (game !== null) {
        game = storedGame;
      }
      
}
startEl.addEventListener("click", function(event) {
    event.preventDefault();
    renderGame()
    }
};
