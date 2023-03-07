async function loadapp() {
  var search = window.location.search.replace("?", "").split("&"), query = {};
  search.forEach(x => { var div = x.split("="); query[div[0]] = div[1];});
  if (query.id) {
    var req = await fetch("/appViewer/appInfo.json"),
    // var req = await fetch("/viewer2/appInfo.json"),
        data = await req.json(),
        app = false;
      data.forEach(x => {if (x.id == query.id){app = x;}});
        if (!app) {
          document.querySelector("#app").setAttribute("src", "data:text/html,App Doesn't Exist");
        } else {
          document.querySelector("#app").setAttribute("src", app.url + "?key=" + Date.now());
          document.querySelector("#app-description").innerHTML = app.description;
          document.title += " "  + app.name;
        }
  } else {
    document.querySelector("#app").setAttribute("src", "data:text/html,App Doesn't Exist");
  }
}

window.addEventListener("load", loadapp);
document.querySelector("#fs").addEventListener("click", () => {
  document.querySelector(".app-container iframe").requestFullscreen();
});
document.addEventListener('contextmenu', event => event.preventDefault());

