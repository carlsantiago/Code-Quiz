var ul = document.getElementById('highscoreList');
var li = document.createElement("li");
var clearBtn = document.getElementById("clear");

var playerList = [];

clearBtn.addEventListener('click', clearScores);

function clearScores(){
    localStorage.clear();
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
}


function renderLi() {

    playerList.sort(function(a, b){
        return b.score - a.score;
  });

    for (var i = 0; i < playerList.length; i++) {

      var y = playerList[i].name
      var z = playerList[i].score
      
      var li = document.createElement("li");
        
      li.textContent = y + " 💥 " + z ;
    
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