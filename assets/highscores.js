var ul = document.getElementById('highscoreList');
var li = document.createElement("li");

var playerList = [];

function renderLi() {

    for (var i = 0; i < playerList.length; i++) {
      var x = playerList[i];

      var li = document.createElement("li");
      li.textContent = x;
      
      ul.appendChild(li);
    }
}


function init() {
    var player = JSON.parse(localStorage.getItem("user"));
    if (player !== null) {
      playerList = player;
    }

    renderLi();
}


init();