let lightTheme = "lightstyle.css";
let darkTheme = "darkstyle.css";

function changeTheme() {
    let darkMode = document.getElementById("dark-mode");
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") == lightTheme) {
      theme.href = darkTheme;
      darkMode.innerHTML = "🌞";
    } else {
      theme.href = lightTheme;
      darkMode.innerHTML = "🌙";
    }
  }
