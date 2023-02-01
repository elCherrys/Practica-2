
function toggleTheme(){
var theme = document.getElementsByTagName('link')[0];
if (theme.getAttribute("href")=="css/light.css") {
    theme.setAttribute("href", "css/dark.css");
} else {
    theme.setAttribute("href", "css/light.css");
}
}
