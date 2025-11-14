const ruffle = window.RufflePlayer.newest();
const player = ruffle.createPlayer();
document.getElementById("game").appendChild(player);
player.load("Run 3.swf");
