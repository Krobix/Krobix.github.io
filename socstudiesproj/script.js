var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var iframe = document.getElementById("pageShown");
var allTabs = new Array();
var buttonWidth = 165;
var defaultFontSize = 25;
var selectedTab = 0;

const SHOW_TESTS = false;
const DEBUG_LOG_UPDATES = false;

canvas.height = "100";
canvas.width = window.screen.width;
iframe.width = window.screen.width;
iframe.height = window.screen.height;
iframe.style.border = "none";

class TabButton{
	constructor(txt, filename, id, fontSize){
		try{
			
			if (typeof(fontSize) == "undefined"){
			fontSize = defaultFontSize;
			}
			this.text = txt;
			this.file = filename;
			this.id = id;
			this.fontSize = fontSize
			this.x = this.id * (buttonWidth + 10);
			this.fullPath = "htm/" + filename;
			this.selected = false;
			
			this.textElement = document.createElement("div");
			this.textElement.className = "button-text";
			this.textElement.style.top = (canvas.height / 2) + "px";
			this.textElement.style.left = this.x + "px";
			this.textElement.style.width = buttonWidth + "px";
			this.textElement.style.height = canvas.height + "px";
			this.textElement.innerHTML = this.text;
			document.body.appendChild(this.textElement);
			this.textElement.focus();
		}
		
		catch(e){
			alert("error in constructor for button id: " + this.id + " error: " + e);
		}
	}
	
	draw(){
		if(DEBUG_LOG_UPDATES){
			alert("draw() called on TabButton with text " + this.text + " and id " + this.id);
		}
		ctx.strokeStyle = "black";
		ctx.fillStyle = "gray";
		ctx.lineWidth = "3";
		ctx.fillRect(this.x, 0, buttonWidth, canvas.height);
		ctx.rect(this.x, 0, buttonWidth, canvas.height);
		ctx.stroke();
	}
	
	select(){
		if(!(this.id == selectedTab)){
			allTabs[selectedTab].selected = false;
		}
		this.selected = true;
		selectedTab = this.id;
		iframe.src = this.fullPath;
	}
}

function addTabButton(txt, filename, fsize){
	allTabs.push(new TabButton(txt, filename, allTabs.length, fsize));
}

function setup(){
	if(SHOW_TESTS){
		addTabButton("test0", "test0.htm");
		addTabButton("test1", "test1.htm");
		addTabButton("test2", "test2.htm");
	}
	addTabButton("Main", "main.htm");
	addTabButton("Travel", "mecca.htm");
	addTabButton("Facts", "funfacts.htm");
	addTabButton("Pictures", "pictures.htm");
}

function updateAll(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	allTabs.forEach(function(current){
		current.draw();
	})
}

function handleInput(x, y){
	allTabs.forEach(function(c){
		if(x > c.x && x < c.x + buttonWidth){
			c.select();
		}
	})
}

canvas.onclick = function(evt){
	handleInput(evt.offsetX, evt.offsetY);
}

canvas.ontouchstart = function(evt){
	handleInput(evt.touches[0].offsetX, evt.touches[0].offsetY);
}

setup();
updateAll();