var counter=1;
var w = window.innerWidth;
var h = window.innerHeight;
document.getElementById("maxList").style.width = w + "px";
document.getElementById("maxList").style.height = h + "px";
console.log(w+" "+h);

function funcInData() {
var ex = document.getElementById("innerData").value;
var wideCount = counter*310;

//document.getElementById("maxList").style.maxWidth = w + "px";
//document.getElementById("maxList").style.height = h + "px";

if (wideCount<w){
	document.getElementById("list").style.width = wideCount + "px";
	var pic = document.createElement('img');
	pic.src = ex;
	list.appendChild(pic);
	pic.className = 'smallImg';
	counter++;
} else {
	document.getElementById("list").style.height = 610 + "px";
}
};