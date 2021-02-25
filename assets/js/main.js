const change = document.getElementById("navChange")
const home = document.getElementById("navHome")
change.addEventListener('click', changeMyColor => {
    home.style.backgroundColor = "rgb(241, 83, 110)"
})
