//verify.js - Verify game with access keys to assure that the games are viewed in only the viewer

window.addEventListener("load", () => {
  var key = parseInt(window.location.search.replace("?key=", ""));
  if(Date.now() - key > 1000 || !key) {
    alert("This game is not available via a direct URL, you will need to play it using the provided links, or using CBPR's game viewer.\nThanks - The Chromebook Project.");
    top.location.replace("/");
  }
});

/* 
Date.now() is the number of milliseconds since Jan 1, 1970. It changes 1000 times every second.
The key represents the time when the game was requested, Date.now() represents the time when the game is loading (now).
If they are more than 1 second apart (1000 miliseconds), we will alert the user and redirect to the games page.
This makes sure that no one directly accesses the game, because they are programmed for the viewer.
*/

/*

If you would like to add this script to a new game, paste this with the other <script>s:



*/