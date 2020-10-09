var bgheader = document.getElementById("background-header");
var bgp = document.getElementById("background-p");
var timeline = document.getElementById("timeline");
var colors = ["blue", "red", "yellow", "pink", "violet", "purple", "magenta", "teal"];
var timeline_entries = [];
var onclickfs = [];

function getTmpF(obj) {
    return function(){
        obj.show();
    };
}

class TimelineEntry {
    constructor(year, elemid) {
        this.year = year;
        this.element = document.getElementById(elemid);
        this.element.className = ".tentry";
        this.elemid = elemid;
        this.button = null;
    }

    show() {
        setupTimeline();
        this.element.style.display = "inline";
    }
}

function random(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

function bgHeaderRandomColor(){
    bgheader.style.color = random(colors);
    bgp.style.border = "2px solid " + bgheader.style.color;
}

function addEvent(year, elemid){
    timeline_entries.push(new TimelineEntry(year, elemid));
    console.log(timeline_entries);
}

function setupTimeline() {
    timeline_entries = timeline_entries.sort(function(a, b){return a.year-b.year});
    console.log("setupTimeline() called");
    onclickfs = [];
    timeline.innerHTML = "";
    timeline_entries.forEach(function(val, index){
        console.log(`val: ${val}`);
        val.element.style.display = "none";
        timeline.innerHTML += `<button id="${val.elemid}-b">${val.year}</button>`;
        val.button = document.getElementById(`${val.elemid}-b`);
        console.log("VAL2");
        console.log(`${val.elemid}`);
        //val.button.onclick();
        timeline_entries[index] = val;
    });
    /* onclickfs.forEach(function(val, index){
        try {
            console.log(index);
            console.log(timeline_entries[index].year);
            console.log(timeline_entries[index].button);
            timeline_entries[index].button.onclick = val;
        }
        catch(e) {
            console.log(e);
        }
    }); */

    for (i = 0; i < timeline_entries.length; i++) {
        val = timeline_entries[i];
        document.getElementById(`${val.elemid}-b`).onclick = getTmpF(val);
    } 
}

//addEvent(5000, "timeline-birth");
addEvent(1729, "timeline-birth");
addEvent(1796, "timeline-death");
addEvent(1745, "timeline-marriage");
addEvent(1762, "timeline-peterd");
addEvent(1725, "timeline-peterd1");
addEvent(1728, "timeline-peter3-born");
addEvent(1772, "timeline-poland-partition1");
addEvent(1741, "timeline-elizabeth");
addEvent(1754, "timeline-paul");
addEvent(1759, "timeline-anna");
setInterval(bgHeaderRandomColor, 100);
setupTimeline();