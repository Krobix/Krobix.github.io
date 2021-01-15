const COLORS = ["blue", "pink", "red", "white", "black", "orange", "yellow", "magenta","purple", "green", "grey", "brown"];
const ANIME = ["anime", "ANIME"]; 
var title = document.getElementById("title");

function changeElementColorRandom(element) {
    return function(){
        element.style.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    };
}

function changeAnime(){
    var animeWord = document.getElementById("animeword");
    animeWord.innerHTML = ANIME[Math.floor(Math.random() * ANIME.length)];
}

setInterval(changeElementColorRandom(title), 100);
setInterval(changeAnime, 50);
setInterval(changeElementColorRandom(document.getElementById("animeword")), 100);
setInterval(changeElementColorRandom(document.getElementById("lifegod")), 100);
setInterval(changeElementColorRandom(document.getElementById("kars")), 100);
setInterval(changeElementColorRandom(document.getElementById("ending")), 100);