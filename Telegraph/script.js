//var canvas = document.getElementById("canv");
const HEIGHT=window.screen.availHeight, WIDTH=window.screen.availWidth;
var clickCounter = 0;
var points = [];

var __rpoints = [
    [180, 148, [1]], //0
    [289, 152, [0, 2, 3]], //1
    [325, 148, []], //2
    [279, 195, []], //3
];

class MapPoint {
    constructor(x, y, connections){
        this.x = x;
        this.y = y;
        this.connections = connections;

    }
}

function initPoints(){
    for(var i=0; i<__rpoints.length; i++){
        var cpoint = __rpoints[i];
        points[i] = new MapPoint(cpoint[0], cpoint[1], cpoint[2]);
    }
}

function drawMap(){
    var ctx = canvas.getContext("2d");
    ctx.drawImage(document.getElementById("map"), 0, 0, 1920, 540);
}

function mapClickHandler(evt){
    console.log("Click " + clickCounter + ": (" + evt.offsetX + ", " + evt.offsetY + ")");
    clickCounter++;
}

//drawMap();
//initPoints();
//canvas.onclick = mapClickHandler;