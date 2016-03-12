var counter=1;
var w = window.innerWidth;
var h = window.innerHeight;
document.getElementById("maxList").style.width = w + "px";
document.getElementById("maxList").style.height = h + "px";
console.log(w+" "+h);

function funcInData() {
	var wideCount = counter*310;
if ((wideCount+310)<w){
	counter++;
} else {
	document.getElementById("list").style.height = 610 + "px";
}
	var ex = document.getElementById("innerData").value;
	document.getElementById("list").style.width = wideCount + "px";
	var pic = document.createElement('img');
	pic.src = ex;
	list.appendChild(pic);
	pic.className = 'smallImg';


};