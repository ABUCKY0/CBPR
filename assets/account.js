const account = document.getElementById("account");
const whenSignedIn = document.getElementById("whenSignedIn");
const whenSignedOut = document.getElementById("whenSignedOut");

if (Auth) {
  Auth.onAuthStateChanged = user => {
    if (user) {
      whenSignedIn.style.display = "block";
      whenSignedOut.style.display = "none";
      whenSignedIn.querySelector("p").innerText = "Hello, " + user.name;
    } else {
      whenSignedIn.style.display = "none";
      whenSignedOut.style.display = "block";
    }
  };
  
  Auth.onAuthError = e => {
    document.getElementById("account").innerHTML = "Enable Cookies to log in";
  };
  
  document.getElementById("signin").addEventListener("click", Auth.login);
  document.getElementById("signout").addEventListener("click", Auth.logout);
} else {
  console.error("Can't get accounts right now");
}

window.addEventListener("load", () => {
  if(window.location.protocol === "http:") {
    window.location.replace("https://"+window.location.host+window.location.pathname);
  }
});