async function loadGame() {
  var search = window.location.search.replace("?", "").split("&"), query = {};
  search.forEach(x => { var div = x.split("="); query[div[0]] = div[1];});
  if (query.id) {
    var req = await fetch("/gameViewer/gameInfo.json"),
    // var req = await fetch("/viewer/appInfo.json"),
        data = await req.json(),
        game = false;
      data.forEach(x => {if (x.id == query.id){game = x;}});
        if (!game) {
          document.querySelector("#game").setAttribute("src", "data:text/html,Game Doesn't Exist");
        } else {
          document.querySelector("#game").setAttribute("src", game.url + "?key=" + Date.now());
          document.querySelector("#game-description").innerHTML = game.description;
          document.title += " "  + game.name;
        }
  } else {
    document.querySelector("#game").setAttribute("src", "data:text/html,Game Doesn't Exist");
  }
}

window.addEventListener("load", loadGame);
document.querySelector("#fs").addEventListener("click", () => {
  document.querySelector(".game-container iframe").requestFullscreen();
});
document.addEventListener('contextmenu', event => event.preventDefault());