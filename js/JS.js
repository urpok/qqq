var counter=1;
var w = window.innerWidth;
var h = window.innerHeight;
document.getElementById("maxList").style.width = w + "px";
document.getElementById("maxList").style.height = h + "px";
console.log(w+" "+h);
function funcInData() {
var ex = document.getElementById("innerData").value;
var pic = document.createElement('img');
pic.src = ex;
list.appendChild(pic);
pic.className = 'smallImg';
var wideCount = counter*308;
counter++;
document.getElementById("list").style.width = wideCount + "px";
//document.getElementById("maxList").style.width = w + "px";
//document.getElementById("maxList").style.height = h + "px";
};